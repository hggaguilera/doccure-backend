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
      params.action === 'findRaw'
    ) {
      if (!params.args.where) {
        params.args.where = { isDeleted: false };
      }
      params.args.where.isDeleted = false;
    }
    return next(params);
  };
}
