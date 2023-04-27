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
  personId: string;
  prefix: string;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  isSystemUser: boolean;
  status: string;
  specializations: string[];
  createdAt: string | Date;
};

export type ServicesWithSpecialties = {
  id: string;
  specialtyName: string;
  specialtyDescription: string;
  doctors: string[];
  services: {
    id: string;
    name: string;
  }[];
  status: 'active' | 'inactive';
};

export type Specialties = {
  id: string;
  specialtyName: string;
  specialtyDescription: string;
  status: 'active' | 'inactive';
};

export type AppointmentInput = {
  name: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  doctor: string;
  service: string;
  date: string;
};

export type Service = {
  id: string;
  serviceName: string;
  serviceDescription: string;
  price: number;
  status: string;
};

export type Appointment = {
  id: string;
  doctor: string;
  doctorEmail: string;
  patient: string;
  service: string;
  date: string | Date;
  status: string;
  message?: string;
};

export type AppointmentUpdateInput = {
  doctorId?: string;
  serviceId?: string;
  date?: string | Date;
  status?: 'active' | 'inactive';
  isDeleted?: boolean;
};

export type UserLogin = {
  username: string;
  password: string;
};
