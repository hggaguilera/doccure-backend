import { Module } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { InvoiceController } from './invoice.controller';

@Module({
  providers: [InvoiceService, PrismaService],
  controllers: [InvoiceController],
})
export class InvoiceModule {}
