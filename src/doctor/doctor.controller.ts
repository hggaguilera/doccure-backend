import {
  Controller,
  Get,
  Post,
  Patch,
  Body,
  Param,
  UseGuards,
  UseFilters,
  InternalServerErrorException,
} from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { DoctorService } from './doctor.service';
import {
  DoctorCreateInput,
  DoctorUpdateInput,
  DoctorWithSpecialties,
} from 'src/types';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';

@Controller('doctors')
@UseFilters(new HttpExceptionFilter())
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Get('simplified')
  async findManyWithBasicInfo() {
    try {
      return this.doctorService.getDoctorsBasicInfo();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return this.doctorService.getDoctor({ id: id });
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @UseGuards(AuthGuard)
  @Get()
  async findMany(): Promise<DoctorWithSpecialties[]> {
    try {
      return this.doctorService.getDoctors({});
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() personData: DoctorCreateInput) {
    try {
      return this.doctorService.createDoctor(personData);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: DoctorUpdateInput) {
    try {
      return this.doctorService.updateDoctor(id, data);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
