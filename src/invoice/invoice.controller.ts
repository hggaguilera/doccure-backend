import {
  Controller,
  Post,
  UseGuards,
  Body,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { AuthGuard } from 'src/guards/auth.guard';
import * as dayjs from 'dayjs';
import { InvoiceInput } from 'src/types';

@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @UseGuards(AuthGuard)
  @Post()
  async create(@Body() data: InvoiceInput) {
    const invoiceDate = dayjs(data.date);
    try {
      if (invoiceDate > dayjs()) {
        throw new BadRequestException('Invoice Data Cannot be in the Future');
      }
      return await this.invoiceService.createInvoice(data);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
