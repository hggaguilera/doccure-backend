import {
  Controller,
  Get,
  UseFilters,
  InternalServerErrorException,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { ServiceService } from './service.service';
import { Service } from 'src/types';

@Controller()
@UseFilters(new HttpExceptionFilter())
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Get('services')
  async getServiceList(): Promise<Service[]> {
    try {
      return await this.serviceService.services({});
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
