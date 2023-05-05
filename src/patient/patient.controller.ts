import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  UseGuards,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { PatientService } from './patient.service';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('patients')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @UseGuards(AuthGuard)
  @Get(':id')
  async getPatientById(@Param('id') id: string) {
    const patient = await this.patientService.getPatient({ id: id });
    if (!patient) {
      throw new NotFoundException('Patient does not exist');
    }
    return patient;
  }

  @UseGuards(AuthGuard)
  @Get()
  async getPatientList() {
    return this.patientService.getPatients({ where: { doctor: null } });
  }

  @UseGuards(AuthGuard)
  @Post()
  async createPatient(@Body() personData) {
    const existingPerson = await this.patientService.getPatient({
      email: personData.email,
    });
    if (existingPerson) {
      throw new ConflictException('Person with email already exist');
    }

    return this.patientService.createPatient(personData);
  }
}
