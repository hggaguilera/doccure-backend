import { Prisma } from '@prisma/client';

export type DoctorCreateInput = {
  firstName: string;
  middleName?: string;
  lastName: string;
  email?: string;
  isSystemUser?: boolean;
  prefix: string;
  address: Prisma.AddressCreateManyInput;
  phoneNumber: Prisma.PhoneNumberCreateManyInput;
  specialties: string[];
};

export type DoctorUpdateInput = {
  email?: string;
  isSystemUser?: boolean;
  address: Prisma.AddressUpdateInput;
  phoneNumber: Prisma.PhoneNumberCreateManyInput;
  specialties: string[];
};

export type DoctorWithSpecialties = {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  isSystemUser: boolean;
  status: string;
  specializations: string[];
};
