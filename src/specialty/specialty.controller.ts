import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Body,
  UseGuards,
  UseFilters,
  InternalServerErrorException,
} from '@nestjs/common';
import { SpecialtyService } from './specialty.service';
import { AuthGuard } from 'src/guards/auth.guard';
import { Specialties, Specialty } from 'src/types';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';

@Controller('specialties')
@UseFilters(new HttpExceptionFilter())
export class SpecialtyController {
  constructor(private readonly specialtyService: SpecialtyService) {}

  @UseGuards(AuthGuard)
  @Get()
  async findMany(): Promise<Specialties[]> {
    try {
      return this.specialtyService.specialties({});
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() data: Specialty) {
    try {
      await this.specialtyService.createSpecialty(data);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @UseGuards(AuthGuard)
  @Patch()
  async update(@Param('id') id: string, @Body() status: 'active' | 'inactive') {
    try {
      await this.specialtyService.updateSpecialty(id, status);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
