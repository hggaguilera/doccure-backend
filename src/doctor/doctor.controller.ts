import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { DoctorService } from './doctor.service';
import { DoctorCreateInput, DoctorWithSpecialties } from 'src/types';

@Controller('doctors')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @UseGuards(AuthGuard)
  @Get(':id')
  async getDoctorById(@Param('id') id: string): Promise<DoctorWithSpecialties> {
    return this.doctorService.getDoctor({ id: id });
  }

  @Get()
  async getDoctorsList(): Promise<DoctorWithSpecialties[]> {
    return this.doctorService.getDoctors({ where: { status: 'active' } });
  }

  @Post()
  async createDoctor(
    @Body() personData: DoctorCreateInput,
  ): Promise<DoctorWithSpecialties> {
    return this.doctorService.createDoctor(personData);
  }
}
