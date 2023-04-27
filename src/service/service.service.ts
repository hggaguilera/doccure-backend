import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { Service, ServicesWithSpecialties } from 'src/types';

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

  async servicesBySpecialties(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.SpecialtyWhereUniqueInput;
    where?: Prisma.SpecialtyWhereInput;
    orderBy?: Prisma.SpecialtyOrderByWithRelationInput;
  }): Promise<ServicesWithSpecialties[]> {
    const { skip, take, cursor, where, orderBy } = params;

    const specialties = await this.prisma.specialty.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: {
        doctors: {
          include: {
            doctor: {
              include: {
                person: true,
              },
            },
          },
        },
        services: {
          include: {
            service: true,
          },
        },
      },
    });

    const specialtiesWithDoctorAndServicesData = specialties.map(
      (specialty) => {
        const doctors = specialty.doctors.map((item) => item.doctor.id);

        const services = specialty.services.map((item) => {
          return {
            id: item.service.id,
            name: item.service.serviceName,
          };
        });

        return {
          id: specialty.id,
          specialtyName: specialty.specialtyName,
          specialtyDescription: specialty.specialtyDescription,
          doctors,
          services,
          status: specialty.status,
        };
      },
    );
    return specialtiesWithDoctorAndServicesData;
  }
}
