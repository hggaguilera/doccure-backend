import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PatientService {
  constructor(private prisma: PrismaService) {}

  async getPatients(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PersonWhereUniqueInput;
    where?: Prisma.PersonWhereInput;
    orderBy?: Prisma.PersonOrderByWithRelationInput;
  }) {
    const { skip, take, cursor, where, orderBy } = params;

    const persons = await this.prisma.person.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: {
        phoneNumbers: {
          where: { status: 'active', isPrimary: 'yes' },
          orderBy: {
            createdAt: 'desc',
          },
          select: {
            id: true,
            isPrimary: true,
            type: true,
            countryCode: true,
            phoneNumber: true,
            status: true,
          },
          take: 1,
        },
        addresses: {
          where: { status: 'active' },
          orderBy: {
            createdAt: 'desc',
          },
          select: {
            id: true,
            countryId: true,
            addressLineOne: true,
            addressLineTwo: true,
            stateOrCity: true,
            townOrMunicipality: true,
            zipCode: true,
            status: true,
          },
          take: 1,
        },
      },
    });

    const formattedPersons = persons.map((person) => {
      return {
        id: person.id,
        name: `${person.firstName} ${person.lastName}`,
        dateOfBirth: person.dateOfBirth || '',
        email: person.email,
        status: person.status,
        phoneNumbers: person.phoneNumbers,
        addresses: person.addresses,
      };
    });

    return formattedPersons;
  }
}
