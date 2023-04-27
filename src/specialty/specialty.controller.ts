import { Controller, Get } from '@nestjs/common';
import { SpecialtyService } from './specialty.service';
import { Specialties } from 'src/types';

@Controller('specialties')
export class SpecialtyController {
  constructor(private readonly specialtyService: SpecialtyService) {}

  @Get()
  async getSpecialtiesList(): Promise<Specialties[]> {
    return this.specialtyService.specialties({});
  }
}
