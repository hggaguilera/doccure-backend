import { Prisma } from '@prisma/client';

export type DoctorCreateInput = {
  firstName: string;
  middleName?: string;
  lastName: string;
  email?: string;
  dateOfBirth: string;
  isSystemUser?: boolean;
  prefix: string;
  address: Prisma.AddressCreateManyInput;
  phone: Prisma.PhoneNumberCreateManyInput;
  specialties: string[];
};

export type DoctorUpdateInput = {
  email?: string;
  isSystemUser?: boolean;
  address?: Prisma.AddressUpdateInput;
  phone?: Prisma.PhoneNumberUpdateInput;
  specialties?: string[];
  status?: 'active' | 'inactive';
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

export type Specialty = {
  id: string;
  specialtyName: string;
  specialtyDescription: string;
  status: 'active' | 'inactive';
  createdAt: string | Date;
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

export interface AppointmentDetails {
  name: string;
  date: string;
  hour: string;
  doctor: string;
}

export interface WelcomeDetails {
  name: string;
  url: string;
}

export interface Patient {
  firstName: string;
  lastName: string;
  middleName?: string;
  dateOfBirth: string | Date;
  email?: string;
  phone: {
    isPrimary?: 'yes' | 'no';
    type?: 'mobile' | 'home' | 'work' | 'other';
    countryCode: string;
    phoneNumber: string;
  };
  address: {
    countryId: string;
    addressLineOne: string;
    addressLineTwo?: string;
    stateOrCity: string;
    townOrMunicipality: string;
    zipCode?: string;
  };
}

export interface PatientUpdate {
  middleName?: string;
  dateOfBirth?: string | Date;
  email?: string;
  status?: 'active' | 'inactive';
  phone?: {
    isPrimary?: 'yes' | 'no';
    type?: 'mobile' | 'home' | 'work' | 'other';
    countryCode: string;
    phoneNumber: string;
  };
  address?: {
    countryId: string;
    addressLineOne: string;
    addressLineTwo?: string;
    stateOrCity: string;
    townOrMunicipality: string;
    zipCode?: string;
  };
}

export type SpecialtyInput = {
  name: string;
  description: string;
};

export interface SpecialtyUpdateInput {
  specialtyName?: string;
  specialtyDescription?: string;
  status?: 'active' | 'inactive';
  isDeleted?: boolean;
}

export type ServiceInput = {
  specialtyId: string;
  serviceName: string;
  serviceDescription: string;
  price: number;
};

export interface ServiceUpdateInput {
  oldSpecialtyId?: string;
  specialtyId?: string;
  serviceName?: string;
  serviceDescription?: string;
  price?: number;
  status?: 'active' | 'inactive';
}
