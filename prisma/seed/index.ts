import { PrismaClient } from '@prisma/client';
import countries from './data/countries';
import specialties from './data/specialties';
import doctors from './data/doctors';
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

  const deletedRecords =
    deletedCountries.count +
    deletedDoctorWithSpecialties.count +
    deletedUsers.count;

  console.log('\n', `\u{1F3AF} ${deletedRecords} records were deleted`);

  const createdCountries = await prisma.country.createMany({
    data: countries,
    skipDuplicates: true,
  });
  const createdSpecialties = await prisma.specialty.createMany({
    data: specialties,
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

  const records = createdCountries.count + createdSpecialties.count;
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
