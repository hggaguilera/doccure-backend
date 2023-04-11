import {
  Controller,
  Param,
  Post,
  Patch,
  Get,
  Body,
  UseFilters,
  InternalServerErrorException,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { AppointmentService } from './appointment.service';
import {
  Appointment,
  AppointmentInput,
  AppointmentUpdateInput,
} from 'src/types';

@Controller('appointments')
@UseFilters(new HttpExceptionFilter())
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Post()
  async createAppointment(
    @Body() data: AppointmentInput,
  ): Promise<Appointment> {
    try {
      return await this.appointmentService.createAppointment(data);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  @Get()
  async getDoctorsList(): Promise<Appointment[]> {
    try {
      return await this.appointmentService.getAppointments({});
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  @Get(':id')
  async getAppointmentById(@Param('id') id: string): Promise<Appointment> {
    try {
      return await this.appointmentService.getAppointment({ id: id });
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  @Patch(':id')
  async updateAppointment(
    @Param('id') id: string,
    @Body() data: AppointmentUpdateInput,
  ): Promise<Appointment> {
    try {
      return await this.appointmentService.updateAppointment({ id: id }, data);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
