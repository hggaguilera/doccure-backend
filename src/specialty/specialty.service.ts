import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { Specialty, SpecialtyInput, SpecialtyUpdateInput } from 'src/types';

@Injectable()
export class SpecialtyService {
  constructor(private prisma: PrismaService) {}

  async specialties(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.SpecialtyWhereUniqueInput;
    where?: Prisma.SpecialtyWhereInput;
    orderBy?: Prisma.SpecialtyOrderByWithRelationInput;
  }): Promise<Specialty[]> {
    const { skip, take, cursor, where, orderBy } = params;

    return this.prisma.specialty.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      select: {
        id: true,
        specialtyName: true,
        specialtyDescription: true,
        status: true,
        createdAt: true,
      },
    });
  }

  async createSpecialty(data: SpecialtyInput): Promise<Specialty> {
    const specialty = await this.prisma.specialty.create({
      data: {
        specialtyName: data.name,
        specialtyDescription: data.description,
      },
    });

    return await this.getSpecialty({ id: specialty.id });
  }

  async updateSpecialty(
    id: string,
    data: SpecialtyUpdateInput,
  ): Promise<Specialty> {
    await this.prisma.specialty.update({
      where: { id },
      data,
    });

    return await this.getSpecialty({ id });
  }

  async getSpecialty(specialtyId: Prisma.SpecialtyWhereUniqueInput) {
    return await this.prisma.specialty.findUnique({
      where: specialtyId,
      select: {
        id: true,
        specialtyName: true,
        specialtyDescription: true,
        status: true,
        createdAt: true,
      },
    });
  }
}
