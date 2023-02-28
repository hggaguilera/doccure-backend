import { Injectable } from '@nestjs/common';
import { Prisma, Person } from '@prisma/client';
import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';
import { PrismaService } from '../services/prisma/prisma.service';
import { DoctorService } from 'src/doctor/doctor.service';
import { AppointmentInput, Appointment } from '../types';

dayjs.extend(utc);
@Injectable()
export class AppointmentService {
  constructor(
    private prisma: PrismaService,
    private doctorService: DoctorService,
  ) {}

  async createAppointment(data: AppointmentInput): Promise<Appointment> {
    let person: Person;
    let appointment;

    const service = await this.prisma.service.findUnique({
      where: { id: data.service },
    });

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

    const doctor = await this.doctorService.doctor({ id: data.doctor });
    const doctorName = `${doctor.firstName} ${doctor.lastName}`;
    const patientName = `${person.firstName} ${person.lastName}`;

    appointment = await this.prisma.appointment.findFirst({
      where: {
        personId: person.id,
        doctorId: data.doctor,
        serviceId: data?.service || service.id,
        date: dayjs(data.date).utc().toJSON(),
      },
      include: {
        person: true,
        service: true,
      },
    });

    if (appointment) {
      return {
        id: appointment.id,
        doctor: doctorName,
        doctorEmail: doctor.email,
        patient: patientName,
        service: service.serviceName,
        date: appointment.date,
        status: appointment.status,
        message: 'appointment for this patient already exist',
      };
    }

    appointment = await this.prisma.appointment.create({
      data: {
        personId: person.id,
        doctorId: data.doctor,
        serviceId: data?.service || service.id,
        date: dayjs(data.date).utc().toJSON(),
      },
    });

    return {
      id: appointment.id,
      doctor: doctorName,
      doctorEmail: doctor.email,
      patient: patientName,
      service: service.serviceName,
      date: appointment.date,
      status: appointment.status,
    };
  }

  async getAppointments(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.AppointmentWhereUniqueInput;
    where?: Prisma.AppointmentWhereInput;
    orderBy?: Prisma.AppointmentOrderByWithRelationInput;
  }): Promise<Appointment[]> {
    const { skip, take, cursor, where, orderBy } = params;

    const appointments = await this.prisma.appointment.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: {
        doctor: { include: { person: true } },
        person: true,
        service: true,
      },
    });

    const data = appointments.map((appointment) => {
      const doctorName = `${appointment.doctor.person.firstName} ${appointment.doctor.person.lastName}`;
      const patientName = `${appointment.person.firstName} ${appointment.person.lastName}`;

      return {
        id: appointment.id,
        doctor: doctorName,
        doctorEmail: appointment.doctor.person.email,
        patient: patientName,
        service: appointment.service.serviceName,
        date: appointment.date,
        status: appointment.status,
      };
    });

    return data;
  }
}
