import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { Service } from 'src/types';

@Injectable()
export class ServiceService {
  constructor(private prisma: PrismaService) {}

  async services(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ServiceWhereUniqueInput;
    where?: Prisma.ServiceWhereInput;
    orderBy?: Prisma.ServiceOrderByWithRelationInput;
  }): Promise<Service[]> {
    const { skip, take, cursor, where, orderBy } = params;

    return await this.prisma.service.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      select: {
        id: true,
        serviceName: true,
        serviceDescription: true,
        price: true,
        status: true,
      },
    });
  }
}
