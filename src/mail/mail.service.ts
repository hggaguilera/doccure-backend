import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { AppointmentDetails, WelcomeDetails } from 'src/types';

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
      context: { ...details },
    });
  }

  async sendWelcomeEmail(details: WelcomeDetails, emailTo: string) {
    await this.mailerService.sendMail({
      to: emailTo,
      subject: 'Bienvenido a MS Dental',
      template: './welcome',
      context: { ...details },
    });
  }
}
