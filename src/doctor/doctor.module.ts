import { Module } from '@nestjs/common';
import { PrismaService } from '../services/prisma/prisma.service';
import { DoctorController } from './doctor.controller';
import { DoctorService } from './doctor.service';
import { MailModule } from 'src/mail/mail.module';

@Module({
  imports: [MailModule],
  controllers: [DoctorController],
  providers: [DoctorService, PrismaService],
})
export class DoctorModule {}
