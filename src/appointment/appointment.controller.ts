import {
  Controller,
  Param,
  Post,
  Patch,
  Get,
  Body,
  UseFilters,
  InternalServerErrorException,
  UseGuards,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { AuthGuard } from 'src/guards/auth.guard';
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

  @Get('dates')
  async findManyByDoctorAndDate() {
    try {
      return await this.appointmentService.getSimpleAppointments();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @Post()
  async create(@Body() data: AppointmentInput): Promise<Appointment> {
    try {
      return await this.appointmentService.createAppointment(data);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @UseGuards(AuthGuard)
  @Get()
  async findMany(): Promise<Appointment[]> {
    try {
      return await this.appointmentService.getAppointments({});
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Appointment> {
    try {
      return await this.appointmentService.getAppointment({ id: id });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() data: AppointmentUpdateInput,
  ): Promise<Appointment> {
    try {
      return await this.appointmentService.updateAppointment({ id: id }, data);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
