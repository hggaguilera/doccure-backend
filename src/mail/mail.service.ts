import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { AppointmentDetails } from 'src/types';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendAppointmentConfirmation(
    details: AppointmentDetails,
    emailTo: string,
  ) {
    await this.mailerService.sendMail({
      to: emailTo,
      subject: 'Cita Agendada',
      template: './appointment',
      context: {
        name: details.name,
        date: details.date,
        hour: details.hour,
        doctor: details.doctor,
      },
    });
  }
}
