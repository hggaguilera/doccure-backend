import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';

// adding utc helpers to date handler package
dayjs.extend(utc);

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
        firstName: patient.firstName,
        lastName: patient.lastName,
        dateOfBirth: patient.dateOfBirth || '',
        email: patient.email,
        status: patient.status,
        phone: patient.phoneNumbers,
        address: patient.addresses,
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
        firstName: person.firstName,
        lastName: person.lastName,
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
    const phoneCleanData = Object.assign({}, data.phone);
    const addressCleanData = Object.assign({}, data.address);

    // delete fields that are not necessary
    delete patientCleanData.id;
    delete patientCleanData.phone;
    delete patientCleanData.address;
    delete phoneCleanData.id;
    delete addressCleanData.id;

    const person = await this.prisma.person.create({
      data: {
        ...patientCleanData,
        dateOfBirth: dayjs(patientCleanData.dateOfBirth).utc().toJSON(),
      },
    });

    await this.prisma.address.create({
      data: { ...addressCleanData, personId: person.id },
    });

    await this.prisma.phoneNumber.create({
      data: { ...phoneCleanData, personId: person.id },
    });

    return this.getPatient({ id: person.id });
  }
}
