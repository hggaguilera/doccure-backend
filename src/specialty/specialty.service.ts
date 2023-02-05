import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { Specialties } from 'src/types';

@Injectable()
export class SpecialtyService {
  constructor(private prisma: PrismaService) {}

  async specialties(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.SpecialtyWhereUniqueInput;
    where?: Prisma.SpecialtyWhereInput;
    orderBy?: Prisma.SpecialtyOrderByWithRelationInput;
  }): Promise<Specialties[]> {
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
      },
    });
  }
}
