import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma/prisma.service';
import { MailService } from 'src/mail/mail.service';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Prisma } from '@prisma/client';
import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';
import {
  DoctorCreateInput,
  DoctorWithSpecialties,
  DoctorUpdateInput,
} from '../types';
import IDS from 'prisma/seed/data/_constants';

dayjs.extend(utc);

@Injectable()
export class DoctorService {
  constructor(
    private prisma: PrismaService,
    private mailService: MailService,
    private config: ConfigService,
    private jwtService: JwtService,
  ) {}

  async getDoctor(doctorWhereUniqueInput: Prisma.DoctorWhereUniqueInput) {
    const doctor = await this.prisma.doctor.findUnique({
      where: doctorWhereUniqueInput,
      include: {
        person: {
          include: {
            phoneNumbers: {
              select: {
                countryCode: true,
                phoneNumber: true,
              },
            },
            addresses: {
              select: {
                addressLineOne: true,
                addressLineTwo: true,
                townOrMunicipality: true,
                stateOrCity: true,
                zipCode: true,
              },
            },
          },
        },
        specializations: {
          include: {
            specialty: true,
          },
        },
      },
    });

    if (doctor) {
      const specialties = doctor.specializations.map(
        (specialty) => specialty?.specialty?.id,
      );

      return {
        prefix: doctor.prefix,
        firstName: doctor.person.firstName,
        middleName: doctor.person.middleName,
        lastName: doctor.person.lastName,
        dateOfBirth: doctor.person.dateOfBirth,
        email: doctor.person.email,
        isSystemUser: doctor.person.isSystemUser,
        phone: doctor.person.phoneNumbers,
        address: doctor.person.addresses,
        specialties,
      };
    }
    return null;
  }

  async getDoctors(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.DoctorWhereUniqueInput;
    where?: Prisma.DoctorWhereInput;
    orderBy?: Prisma.DoctorOrderByWithRelationInput;
  }): Promise<DoctorWithSpecialties[]> {
    const { skip, take, cursor, where, orderBy } = params;

    const doctors = await this.prisma.doctor.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: {
        person: true,
        specializations: {
          include: {
            specialty: true,
          },
        },
      },
    });

    const doctorsWithSpecialties = doctors.map((doctor) => {
      const specialties = doctor.specializations.map(
        (specialty) => specialty?.specialty?.id,
      );
      return {
        id: doctor?.id,
        personId: doctor?.personId,
        prefix: doctor?.prefix,
        firstName: doctor?.person?.firstName,
        middleName: doctor?.person?.middleName,
        lastName: doctor?.person?.lastName,
        email: doctor?.person?.email,
        isSystemUser: doctor?.person?.isSystemUser,
        status: doctor?.status,
        createdAt: doctor.createdAt,
        specializations: specialties,
      };
    });

    return doctorsWithSpecialties;
  }

  async getDoctorsBasicInfo() {
    const doctors = await this.prisma.doctor.findMany({
      where: { status: 'active' },
      include: {
        person: true,
        specializations: {
          include: {
            specialty: true,
          },
        },
      },
    });

    const doctorsWithSpecialties = doctors.map((doctor) => {
      const specialties = doctor.specializations.map(
        (specialty) => specialty?.specialty?.specialtyName,
      );
      return {
        id: doctor.id,
        prefix: doctor?.prefix,
        firstName: doctor?.person?.firstName,
        lastName: doctor?.person?.lastName,
        email: doctor?.person?.email,
        specialty: specialties[specialties.length - 1],
      };
    });

    return doctorsWithSpecialties;
  }

  async createDoctor(data: DoctorCreateInput) {
    const doctorCleanInput = Object.assign({}, data);
    delete doctorCleanInput.prefix;
    delete doctorCleanInput.address;
    delete doctorCleanInput.phone;
    delete doctorCleanInput.specialties;

    const person = await this.prisma.person.create({
      data: {
        ...doctorCleanInput,
        dateOfBirth: dayjs(doctorCleanInput.dateOfBirth).utc().toJSON(),
      },
    });

    const doctor = await this.prisma.doctor.create({
      data: { personId: person.id, prefix: data.prefix },
    });

    if (person.isSystemUser) {
      const baseUrl = this.config.get('CLIENT_BASE_URL');

      const payload = {
        username: person.email,
        name: `${person.firstName} ${person.lastName}`,
        sub: person.id,
      };
      const token = await this.jwtService.signAsync(payload);

      await this.mailService.sendWelcomeEmail(
        {
          name: `${person.firstName} ${person.lastName}`,
          url: `${baseUrl}/auth/confirm?token=${token}`,
        },
        person.email,
      );
    }

    await this.prisma.address.create({
      data: {
        ...data.address,
        personId: person.id,
        countryId: IDS.COUNTRIES.NICARAGUA,
      },
    });

    await this.prisma.phoneNumber.create({
      data: { ...data.phone, personId: person.id },
    });

    for (const specialty of data?.specialties) {
      await this.prisma.doctorsWithSpecialties.create({
        data: { doctorId: doctor.id, specialtyId: specialty },
      });
    }

    return this.getDoctor({ id: doctor.id });
  }

  async updateDoctor(id: string, data: DoctorUpdateInput) {
    const person = Object.assign({}, data);

    if (data.hasOwnProperty('address')) {
      delete person.address;
      await this.prisma.address.update({
        where: { personId: id },
        data: { ...data.address },
      });
    }

    if (data.hasOwnProperty('phone')) {
      delete person.phone;
      await this.prisma.phoneNumber.update({
        where: { personId: id },
        data: { ...data.phone },
      });
    }

    if (data.hasOwnProperty('specialties')) {
      delete person.specialties;
      const doctor = await this.prisma.doctor.findUnique({
        where: { personId: id },
      });

      for (const specialty of data.specialties) {
        await this.prisma.doctorsWithSpecialties.create({
          data: { doctorId: doctor.id, specialtyId: specialty },
        });
      }
    }

    if (data.hasOwnProperty('status')) {
      await this.prisma.doctor.update({
        where: { personId: id },
        data: { status: data.status },
      });
    }

    const doctor = await this.prisma.person.update({
      where: { id },
      data: { ...person },
    });

    if (data.hasOwnProperty('isSystemUser') && data.isSystemUser) {
      const baseUrl = this.config.get('CLIENT_BASE_URL');

      const payload = {
        username: doctor.email,
        name: `${doctor.firstName} ${doctor.lastName}`,
        sub: id,
      };
      const token = await this.jwtService.signAsync(payload);

      await this.mailService.sendWelcomeEmail(
        {
          name: `${doctor.firstName} ${doctor.lastName}`,
          url: `${baseUrl}/auth/confirm?token=${token}`,
        },
        doctor.email,
      );
      console.log('email was send');
    }

    return await this.getDoctor({ personId: id });
  }
}
