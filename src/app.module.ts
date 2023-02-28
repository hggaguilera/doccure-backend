import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from 'nestjs-pino';
import { DoctorModule } from './doctor/doctor.module';
import { AppointmentModule } from './appointment/appointment.module';
import { SpecialtyModule } from './specialty/specialty.module';
import { ServiceModule } from './service/service.module';
import { PatientModule } from './patient/patient.module';

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        transport: { target: 'pino-pretty', options: { singleLine: true } },
      },
    }),
    DoctorModule,
    AppointmentModule,
    SpecialtyModule,
    ServiceModule,
    PatientModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
