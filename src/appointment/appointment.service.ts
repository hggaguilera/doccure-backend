import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma/prisma.service';
import { Prisma, Person, Service } from '@prisma/client';
import { AppointmentInput } from '../types';

@Injectable()
export class AppointmentService {
  constructor(private prisma: PrismaService) {}

  async createAppointment(data: AppointmentInput) {
    let person: Person;
    let service: Service;

    if (!data?.service) {
      service = await this.prisma.service.findFirst({
        where: { serviceName: 'Examen Dental Completo' },
      });
    }

    person = await this.prisma.person.findFirst({
      where: { email: data.email },
    });

    if (!person) {
      const splittedName = data.name.split(' ');
      person = await this.prisma.person.create({
        data: {
          firstName: splittedName[0],
          lastName: splittedName[1],
          email: data.email,
        },
      });
    }

    console.log('person', person);

    const phoneNumber = await this.prisma.phoneNumber.findFirst({
      where: { phoneNumber: data.phoneNumber },
    });

    if (!phoneNumber) {
      await this.prisma.phoneNumber.create({
        data: {
          countryCode: data.countryCode,
          phoneNumber: data.phoneNumber,
          personId: person.id,
        },
      });
    }

    const appointment = await this.prisma.appointment.create({
      data: {
        personId: person.id,
        doctorId: data.doctor,
        serviceId: data?.service || service.id,
        date: data.date,
      },
    });
    console.log('appointment', appointment);
    return appointment;
  }
}
