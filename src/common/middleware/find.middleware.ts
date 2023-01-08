import { Prisma } from '@prisma/client';

export function FindRecordsMiddleware<
  T extends Prisma.BatchPayload = Prisma.BatchPayload,
>(): Prisma.Middleware {
  return async (
    params: Prisma.MiddlewareParams,
    next: (params: Prisma.MiddlewareParams) => Promise<T>,
  ): Promise<T> => {
    if (
      params.action === 'findMany' ||
      params.action === 'findFirst' ||
      params.action === 'findRaw' ||
      params.action === 'findUnique'
    ) {
      params.args.where.isDeleted = false;
      console.log(params.args);
    }
    return next(params);
  };
}
