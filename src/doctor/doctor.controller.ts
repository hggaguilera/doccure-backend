import { Controller, Get, Post, Body } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { Doctor as DoctorModel, Prisma } from '@prisma/client';

type DoctorCreateInput = Prisma.PersonCreateInput & {
  specialtyId: string;
};

@Controller()
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Get('doctors')
  async getDoctorsList(): Promise<DoctorModel[]> {
    return this.doctorService.doctors({ where: { status: 'active' } });
  }

  @Post('doctor')
  async createDoctor(@Body() personData: DoctorCreateInput) {
    return this.doctorService.createDoctor(personData);
  }
}
