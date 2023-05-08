import {
  Controller,
  Get,
  UseFilters,
  InternalServerErrorException,
  UseGuards,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { ServiceService } from './service.service';
import { Service, ServicesWithSpecialties } from 'src/types';
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
  @Get()
  async findMany(): Promise<Service[]> {
    try {
      return await this.serviceService.getServices({});
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
