import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma/prisma.service';
import { Person, Doctor, Prisma } from '@prisma/client';

type DoctorCreateInput = Prisma.PersonCreateInput & {
  specialtyId: string;
};

@Injectable()
export class DoctorService {
  constructor(private prisma: PrismaService) {}

  async doctor(
    doctorWhereUniqueInput: Prisma.DoctorWhereUniqueInput,
  ): Promise<Doctor | null> {
    return this.prisma.doctor.findUnique({ where: doctorWhereUniqueInput });
  }

  async doctors(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.DoctorWhereUniqueInput;
    where?: Prisma.DoctorWhereInput;
    orderBy?: Prisma.DoctorOrderByWithRelationInput;
  }): Promise<Doctor[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.doctor.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createDoctor(data: DoctorCreateInput) {
    const doctorInputWithoutSpecialty = Object.assign({}, data);
    delete doctorInputWithoutSpecialty.specialtyId;

    const person = await this.prisma.person.create({
      data: doctorInputWithoutSpecialty,
    });
    const doctor = await this.prisma.doctor.create({
      data: { personId: person.id },
    });
    const specialty = await this.prisma.specialty.findFirst({
      where: { id: data.specialtyId },
    });
    await this.prisma.doctorsWithSpecialties.create({
      data: { doctorId: doctor.id, specialtyId: data.specialtyId },
    });

    return {
      firstName: person.firstName,
      lastName: person.lastName,
      email: person.email,
      specialty: specialty.specialtyName,
    };
  }
}
