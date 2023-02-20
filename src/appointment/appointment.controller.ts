import {
  Controller,
  Post,
  Body,
  UseFilters,
  InternalServerErrorException,
} from '@nestjs/common';
import { Appointment } from '@prisma/client';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { AppointmentService } from './appointment.service';
import { AppointmentInput } from 'src/types';

@Controller()
@UseFilters(new HttpExceptionFilter())
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Post('appointment')
  async createAppointment(
    @Body() data: AppointmentInput,
  ): Promise<Appointment> {
    try {
      console.log('data controller', data);
      return await this.appointmentService.createAppointment(data);
    } catch (error) {
      console.log('error', error);
      throw new InternalServerErrorException();
    }
  }
}
