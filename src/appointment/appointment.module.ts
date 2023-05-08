import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { AppointmentService } from './appointment.service';
import { AppointmentController } from './appointment.controller';
import { DoctorService } from 'src/doctor/doctor.service';
import { MailModule } from 'src/mail/mail.module';

@Module({
  imports: [MailModule],
  controllers: [AppointmentController],
  providers: [AppointmentService, PrismaService, DoctorService],
})
export class AppointmentModule {}
