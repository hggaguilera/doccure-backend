import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PatientService {
  constructor(private prisma: PrismaService) {}

  async getPatient(patientWhereUniqueInput: Prisma.PersonWhereUniqueInput) {
    const patient = await this.prisma.person.findUnique({
      where: patientWhereUniqueInput,
      include: {
        phoneNumbers: {
          select: {
            id: true,
            isPrimary: true,
            type: true,
            countryCode: true,
            phoneNumber: true,
          },
        },
        addresses: {
          select: {
            id: true,
            countryId: true,
            addressLineOne: true,
            addressLineTwo: true,
            stateOrCity: true,
            townOrMunicipality: true,
            zipCode: true,
          },
        },
      },
    });

    if (patient) {
      return {
        id: patient.id,
        name: `${patient.firstName} ${patient.lastName}`,
        dateOfBirth: patient.dateOfBirth || '',
        email: patient.email,
        status: patient.status,
        phoneNumbers: patient.phoneNumbers,
        addresses: patient.addresses,
      };
    }
    return null;
  }

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
          select: {
            id: true,
            isPrimary: true,
            type: true,
            countryCode: true,
            phoneNumber: true,
          },
        },
        addresses: {
          select: {
            id: true,
            countryId: true,
            addressLineOne: true,
            addressLineTwo: true,
            stateOrCity: true,
            townOrMunicipality: true,
            zipCode: true,
          },
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

  async createPatient(data) {
    const patientCleanData = Object.assign({}, data);
    delete patientCleanData.phone;
    delete patientCleanData.address;

    const person = await this.prisma.person.create({ data: patientCleanData });

    await this.prisma.address.create({
      data: { ...data.address, personId: person.id },
    });

    await this.prisma.phoneNumber.create({
      data: { ...data.phone, personId: person.id },
    });

    return this.getPatient({ id: person.id });
  }
}
