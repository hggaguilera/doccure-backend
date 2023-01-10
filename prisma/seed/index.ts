import { PrismaClient } from '@prisma/client';
import countries from './data/countries';
import specialties from './data/specialties';

const prisma = new PrismaClient();

async function main() {
  const { count } = await prisma.country.deleteMany();
  console.log('\n', `\u{1F3AF} ${count} records were deleted`);

  const createdCountries = await prisma.country.createMany({
    data: countries,
    skipDuplicates: true,
  });
  const createdSpecialties = await prisma.specialty.createMany({
    data: specialties,
    skipDuplicates: true,
  });

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
