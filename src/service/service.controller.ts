import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Body,
  UseFilters,
  InternalServerErrorException,
  UseGuards,
  NotFoundException,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { ServiceService } from './service.service';
import {
  Service,
  ServiceInput,
  ServicesWithSpecialties,
  ServiceUpdateInput,
} from 'src/types';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('services')
@UseFilters(new HttpExceptionFilter())
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Get('services-by-categories')
  async findManyServicesByCategories(): Promise<ServicesWithSpecialties[]> {
    try {
      return await this.serviceService.servicesBySpecialties({});
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const service = await this.serviceService.getService({ id });

      if (!service) {
        throw new NotFoundException(`The record with id ${id} was not found`);
      }

      return service;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @UseGuards(AuthGuard)
  @Get()
  async findMany(): Promise<Service[]> {
    try {
      return await this.serviceService.getServices({});
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() data: ServiceInput) {
    try {
      return this.serviceService.createService(data);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() data: ServiceUpdateInput) {
    try {
      const service = await this.serviceService.getService({ id });
      if (!service) {
        throw new NotFoundException(`The record with id ${id} was not found`);
      }

      return this.serviceService.updateService(id, data);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
