import {
  Controller,
  Post,
  Get,
  Body,
  UseFilters,
  InternalServerErrorException,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { AppointmentService } from './appointment.service';
import { AppointmentInput, Appointment } from 'src/types';

@Controller()
@UseFilters(new HttpExceptionFilter())
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Post('appointment')
  async createAppointment(
    @Body() data: AppointmentInput,
  ): Promise<Appointment> {
    try {
      return await this.appointmentService.createAppointment(data);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  @Get('appointments')
  async getDoctorsList(): Promise<Appointment[]> {
    try {
      return await this.appointmentService.getAppointments({});
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
