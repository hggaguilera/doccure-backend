import { Controller, Get } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { Doctor as DoctorModel } from '@prisma/client';

@Controller()
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Get('doctors')
  async getDoctorsList(): Promise<DoctorModel[]> {
    return this.doctorService.doctors({ where: { status: 'active' } });
  }
}
