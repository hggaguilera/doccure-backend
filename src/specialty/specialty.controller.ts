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
  NotFoundException,
} from '@nestjs/common';
import { SpecialtyService } from './specialty.service';
import { AuthGuard } from 'src/guards/auth.guard';
import { SpecialtyInput, Specialty, SpecialtyUpdateInput } from 'src/types';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';

@Controller('specialties')
@UseFilters(new HttpExceptionFilter())
export class SpecialtyController {
  constructor(private readonly specialtyService: SpecialtyService) {}

  @UseGuards(AuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Specialty> {
    try {
      const specialty = await this.specialtyService.getSpecialty({ id });

      if (!specialty) {
        throw new NotFoundException(`A record with id: ${id} was not found`);
      }

      return specialty;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @UseGuards(AuthGuard)
  @Get()
  async findMany(): Promise<Specialty[]> {
    try {
      return this.specialtyService.specialties({});
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() data: SpecialtyInput) {
    try {
      return await this.specialtyService.createSpecialty(data);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: SpecialtyUpdateInput) {
    try {
      const specialty = await this.specialtyService.getSpecialty({ id });

      if (!specialty) {
        throw new NotFoundException(`A record with id: ${id} was not found`);
      }

      return await this.specialtyService.updateSpecialty(id, data);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
