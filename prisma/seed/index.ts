/* eslint-disable @typescript-eslint/no-var-requires */
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function hashPassword(password: string) {
  const passwordHashed = await bcrypt.hash(password, 10);
  return passwordHashed;
}

const dataModels: Record<string, unknown[]> = {
  country: require('./data/countries').default,
  person: require('./data/persons').default,
  user: require('./data/users').default,
  doctor: require('./data/doctors').default,
  specialty: require('./data/specialties').default,
  service: require('./data/services').default,
  doctorsWithSpecialties: require('./data/doctors-specialties').default,
  specialtyServices: require('./data/specialty-services').default,
};

const reverseObject = Object.fromEntries(Object.entries(dataModels).reverse());

async function deleteAll() {
  for (const modelName in reverseObject) {
    const deletedRecords = await prisma[modelName].deleteMany();
    console.log(
      '\n',
      `\u{1F3AF} ${deletedRecords.count} records were deleted from the table ${modelName}`,
    );
  }
}

async function seedData() {
  for (const modelName in dataModels) {
    const data = dataModels[modelName];
    const createdRecords = await prisma[modelName].createMany({
      data,
      skipDuplicates: true,
    });

    if (modelName === 'user') {
      await prisma[modelName].updateMany({
        where: { status: 'active' },
        data: { password: await hashPassword('test@123') },
      });
    }

    console.log(
      '\n',
      `\u{1F3AF} ${createdRecords.count} records were created for the table ${modelName}`,
    );
  }
}

async function main() {
  await deleteAll();
  await seedData();
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
