import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { DoctorCreateInput, DoctorWithSpecialties } from '../types';

@Injectable()
export class DoctorService {
  constructor(private prisma: PrismaService) {}

  async doctor(
    doctorWhereUniqueInput: Prisma.DoctorWhereUniqueInput,
  ): Promise<DoctorWithSpecialties | null> {
    const doctor = await this.prisma.doctor.findUnique({
      where: doctorWhereUniqueInput,
      include: {
        person: true,
        specializations: {
          include: {
            specialty: true,
          },
        },
      },
    });

    const specialties = doctor.specializations.map(
      (specialty) => specialty?.specialty?.specialtyName,
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
      specializations: specialties,
    };
  }

  async doctors(params: {
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
        (specialty) => specialty?.specialty?.specialtyName,
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
        specializations: specialties,
      };
    });

    return doctorsWithSpecialties;
  }

  async createDoctor(data: DoctorCreateInput) {
    const doctorCleanInput = Object.assign({}, data);
    delete doctorCleanInput.prefix;
    delete doctorCleanInput.address;
    delete doctorCleanInput.phoneNumber;
    delete doctorCleanInput.specialties;

    const person = await this.prisma.person.create({
      data: doctorCleanInput,
    });

    if (person.isSystemUser === true) {
      await this.prisma.user.create({
        data: { personId: person.id, password: 'sos' },
      });
    }

    await this.prisma.address.create({
      data: { ...data.address, personId: person.id },
    });

    await this.prisma.phoneNumber.create({
      data: { ...data.phoneNumber, personId: person.id },
    });

    const doctor = await this.prisma.doctor.create({
      data: { personId: person.id, prefix: data.prefix },
    });

    for (const specialty of data?.specialties) {
      await this.prisma.doctorsWithSpecialties.create({
        data: { doctorId: doctor.id, specialtyId: specialty },
      });
    }

    return this.doctor({ id: doctor.id });
  }

  // async updateDoctor(data: DoctorUpdateInput) {
  //   await this.prisma.address.update({
  //     where: { id: data.address.id },
  //     data: data.address,
  //   });
  // }
}
