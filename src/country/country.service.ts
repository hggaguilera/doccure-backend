import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/services/prisma/prisma.service';

@Injectable()
export class CountryService {
  constructor(private prisma: PrismaService) {}

  async getCountries(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.CountryWhereUniqueInput;
    where?: Prisma.CountryWhereInput;
    orderBy?: Prisma.CountryOrderByWithRelationInput;
  }) {
    const { skip, take, cursor, where, orderBy } = params;

    const countries = await this.prisma.country.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      select: {
        id: true,
        name: true,
        abbreviationTwo: true,
      },
    });

    return countries.map((item) => ({
      value: item.id,
      label: item.name,
      country_abbr: item.abbreviationTwo,
    }));
  }
}
