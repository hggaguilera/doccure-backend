import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import {
  Service,
  ServicesWithSpecialties,
  ServiceInput,
  ServiceUpdateInput,
} from 'src/types';

@Injectable()
export class ServiceService {
  constructor(private prisma: PrismaService) {}

  async getServices(params: {
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

  async createService(data: ServiceInput) {
    const service = await this.prisma.service.create({
      data: {
        serviceName: data.serviceName,
        serviceDescription: data.serviceDescription,
        price: data.price,
      },
    });

    await this.prisma.specialtyServices.create({
      data: { specialtyId: data.specialtyId, serviceId: service.id },
    });

    return {
      serviceName: service.serviceName,
      serviceDescription: service.serviceDescription,
      price: service.price,
      createdAt: service.createdAt,
    };
  }

  async updateService(id: string, data: ServiceUpdateInput) {
    const service = Object.assign({}, data);

    if (data.hasOwnProperty('oldSpecialtyId')) {
      delete service.specialtyId;
      delete service.oldSpecialtyId;

      await this.prisma.specialtyServices.update({
        where: {
          specialtyId_serviceId: {
            serviceId: id,
            specialtyId: data.oldSpecialtyId,
          },
        },
        data: { specialtyId: data.specialtyId },
      });
    }

    if (
      data.hasOwnProperty('specialtyId') &&
      !data.hasOwnProperty('oldSpecialtyId')
    ) {
      delete service.specialtyId;
    }

    await this.prisma.service.update({
      where: { id },
      data: { ...service },
    });

    return await this.getService({ id });
  }

  async getService(serviceId: Prisma.ServiceWhereUniqueInput) {
    const service = await this.prisma.service.findUnique({
      where: serviceId,
    });

    const specialty = await this.prisma.specialtyServices.findFirst({
      where: { serviceId: service.id },
    });

    return {
      serviceName: service.serviceName,
      serviceDescription: service.serviceDescription,
      price: service.price,
      specialtyId: specialty.specialtyId,
    };
  }
}
