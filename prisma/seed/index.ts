import { PrismaClient } from '@prisma/client';
import countries from './data/countries';
import specialties from './data/specialties';
import doctors from './data/doctors';
import services from './data/services';
import timeSlots from './data/time-slots';
import * as bcrypt from 'bcrypt';

async function hashPassword(password: string) {
  const passwordHashed = await bcrypt.hash(password, 10);
  return passwordHashed;
}

const prisma = new PrismaClient();

async function main() {
  const deletedCountries = await prisma.country.deleteMany();
  const deletedDoctorWithSpecialties =
    await prisma.doctorsWithSpecialties.deleteMany();
  const deletedUsers = await prisma.person.deleteMany();
  const deletedServices = await prisma.service.deleteMany();
  const deletedTimeSlots = await prisma.weeklyAvailability.deleteMany();

  const deletedRecords =
    deletedCountries.count +
    deletedDoctorWithSpecialties.count +
    deletedUsers.count +
    deletedServices.count +
    deletedTimeSlots.count;

  console.log('\n', `\u{1F3AF} ${deletedRecords} records were deleted`);

  const createdCountries = await prisma.country.createMany({
    data: countries,
    skipDuplicates: true,
  });
  const createdSpecialties = await prisma.specialty.createMany({
    data: specialties,
    skipDuplicates: true,
  });
  const createdServices = await prisma.service.createMany({
    data: services,
    skipDuplicates: true,
  });

  for (const doctor of doctors) {
    await prisma.person.create({
      data: {
        ...doctor,
        user: {
          create: {
            password: await hashPassword('test@123'),
          },
        },
      },
    });
  }

  const createdTimeSlots = await prisma.weeklyAvailability.createMany({
    data: timeSlots,
    skipDuplicates: true,
  });

  const records =
    createdCountries.count +
    createdSpecialties.count +
    createdServices.count +
    createdTimeSlots.count;
  console.log('\n', `\u{1F3AF} ${records} new records were created`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
