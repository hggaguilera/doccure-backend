import { Controller, Get, UseGuards } from '@nestjs/common';
import { PatientService } from './patient.service';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('patients')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @UseGuards(AuthGuard)
  @Get()
  async getPatientList() {
    return this.patientService.getPatients({ where: { doctor: null } });
  }
}
