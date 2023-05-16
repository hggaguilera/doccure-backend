import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { FindRecordsMiddleware } from '../../common/middleware/find.middleware';
// import { InvoiceCustomIdMiddleware } from 'src/common/middleware/invoice.middleware';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super();
    this.$use(FindRecordsMiddleware());
    // this.$use(InvoiceCustomIdMiddleware());
  }
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
