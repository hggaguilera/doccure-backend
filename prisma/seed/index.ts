import { PrismaClient } from '@prisma/client';
import countries from './data/countries';

const prisma = new PrismaClient();

async function main() {
  const records = await prisma.country.createMany({
    data: countries,
    skipDuplicates: true,
  });
  console.log(`New ${records.count} were created \u{1F3AF}`);
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
