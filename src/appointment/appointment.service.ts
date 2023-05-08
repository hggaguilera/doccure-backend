import { Injectable } from '@nestjs/common';
import { Prisma, Person } from '@prisma/client';
import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';
import { PrismaService } from '../services/prisma/prisma.service';
import { DoctorService } from 'src/doctor/doctor.service';
import { MailService } from 'src/mail/mail.service';
import {
  Appointment,
  AppointmentInput,
  AppointmentUpdateInput,
} from '../types';

import 'dayjs/locale/es';

// adding utc helpers to date handler package
dayjs.extend(utc);

@Injectable()
export class AppointmentService {
  constructor(
    private prisma: PrismaService,
    private doctorService: DoctorService,
    private mailService: MailService,
  ) {}

  async createAppointment(data: AppointmentInput): Promise<Appointment> {
    let person: Person;
    let appointment;

    const service = await this.prisma.service.findUnique({
      where: { id: data.service },
    });

    person = await this.prisma.person.findUnique({
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

    const doctor = await this.doctorService.getDoctor({ id: data.doctor });
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

    await this.mailService.sendAppointmentConfirmation(
      {
        name: patientName,
        date: dayjs(appointment.date)
          .locale('es')
          .format('D [de] MM [de] YYYY'),
        hour: dayjs(appointment.date).format('hh:mm A'),
        doctor: doctorName,
      },
      person.email,
    );

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

  async getSimpleAppointments() {
    const appointments = await this.prisma.appointment.findMany({
      include: {
        doctor: { include: { person: true } },
      },
    });

    const data = appointments.map((appointment) => {
      const doctorName = `${appointment.doctor.person.firstName} ${appointment.doctor.person.lastName}`;

      return {
        doctor: doctorName,
        date: appointment.date,
      };
    });

    return data;
  }

  async getAppointment(
    appointmentId: Prisma.AppointmentWhereUniqueInput,
  ): Promise<Appointment> {
    const appointment = await this.prisma.appointment.findUnique({
      where: appointmentId,
      include: {
        doctor: { include: { person: true } },
        person: true,
        service: true,
      },
    });

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
  }

  async updateAppointment(
    appointmentId: Prisma.AppointmentWhereUniqueInput,
    data: AppointmentUpdateInput,
  ): Promise<Appointment> {
    await this.prisma.appointment.update({ where: appointmentId, data: data });

    const appointment = this.getAppointment(appointmentId);

    return appointment;
  }
}
