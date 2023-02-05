import { Controller, Get } from '@nestjs/common';
import { SpecialtyService } from './specialty.service';
import { Specialties } from 'src/types';

@Controller()
export class SpecialtyController {
  constructor(private readonly specialtyService: SpecialtyService) {}

  @Get('specialties')
  async getSpecialtiesList(): Promise<Specialties[]> {
    return this.specialtyService.specialties({});
  }
}
