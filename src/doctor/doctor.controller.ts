import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { DoctorCreateInput, DoctorWithSpecialties } from 'src/types';

@Controller()
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Get('doctor/:id')
  async getDoctorById(@Param('id') id: string): Promise<DoctorWithSpecialties> {
    return this.doctorService.doctor({ id: id });
  }

  @Get('doctors')
  async getDoctorsList(): Promise<DoctorWithSpecialties[]> {
    return this.doctorService.doctors({ where: { status: 'active' } });
  }

  @Post('doctor')
  async createDoctor(
    @Body() personData: DoctorCreateInput,
  ): Promise<DoctorWithSpecialties> {
    return this.doctorService.createDoctor(personData);
  }
}
