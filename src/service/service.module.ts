import { Module } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma/prisma.service';
import { ServiceService } from './service.service';
import { ServiceController } from './service.controller';

@Module({
  controllers: [ServiceController],
  providers: [ServiceService, PrismaService],
})
export class ServiceModule {}
