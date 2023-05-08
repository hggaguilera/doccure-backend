import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Body,
  UseGuards,
  ConflictException,
  NotFoundException,
  InternalServerErrorException,
  UseFilters,
} from '@nestjs/common';
import { PatientService } from './patient.service';
import { AuthGuard } from 'src/guards/auth.guard';
import { Patient, PatientUpdate } from 'src/types';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';

@Controller('patients')
@UseFilters(new HttpExceptionFilter())
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @UseGuards(AuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const patient = await this.patientService.getPatient({ id: id });
      if (!patient) {
        throw new NotFoundException('Patient does not exist');
      }
      return patient;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @UseGuards(AuthGuard)
  @Get()
  async findMany() {
    try {
      return this.patientService.getPatients({ where: { doctor: null } });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() data: Patient) {
    try {
      const existingPerson = await this.patientService.getPatient({
        email: data.email,
      });
      if (existingPerson) {
        throw new ConflictException('Person with email already exist');
      }

      return this.patientService.createPatient(data);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: PatientUpdate) {
    try {
      if (data.hasOwnProperty('email')) {
        const existingPerson = await this.patientService.getPatient({
          email: data.email,
        });
        if (existingPerson) {
          throw new ConflictException('Person with email already exist');
        }
      }

      return this.patientService.updatePatient(id, data);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
