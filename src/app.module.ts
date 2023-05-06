import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

// App Controller and Service
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Imported Modules
import { DoctorModule } from './doctor/doctor.module';
import { AppointmentModule } from './appointment/appointment.module';
import { SpecialtyModule } from './specialty/specialty.module';
import { ServiceModule } from './service/service.module';
import { PatientModule } from './patient/patient.module';
import { InvoiceModule } from './invoice/invoice.module';
import { AuthModule } from './auth/auth.module';
import { CountryModule } from './country/country.module';

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        transport: { target: 'pino-pretty', options: { singleLine: true } },
      },
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    JwtModule.register({
      global: true,
      signOptions: { expiresIn: '8h' },
      secret: process.env.JWT_SECRET,
    }),
    DoctorModule,
    AppointmentModule,
    SpecialtyModule,
    ServiceModule,
    PatientModule,
    InvoiceModule,
    AuthModule,
    CountryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
