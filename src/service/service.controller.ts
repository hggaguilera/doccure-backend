import {
  Controller,
  Get,
  UseFilters,
  InternalServerErrorException,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { ServiceService } from './service.service';
import { Service, ServicesWithSpecialties } from 'src/types';

@Controller('services')
@UseFilters(new HttpExceptionFilter())
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Get()
  async getServiceList(): Promise<Service[]> {
    try {
      return await this.serviceService.services({});
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  @Get('services-by-categories')
  async getServicesByCategories(): Promise<ServicesWithSpecialties[]> {
    try {
      return await this.serviceService.servicesBySpecialties({});
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
