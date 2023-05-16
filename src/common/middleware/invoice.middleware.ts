import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export function InvoiceCustomIdMiddleware<
  T extends Prisma.BatchPayload = Prisma.BatchPayload,
>(): Prisma.Middleware {
  return async (
    params: Prisma.MiddlewareParams,
    next: (params: Prisma.MiddlewareParams) => Promise<T>,
  ): Promise<T> => {
    if (params.model === 'Invoice' && params.action === 'create') {
      const res = await next(params);

      await prisma.invoice.update({
        where: { id: res['id'] },
        data: { customId: `INV00${res['number']}` },
      });

      return res;
    }
  };
}
