const { PrismaClient } = require("@prisma/client");
const companies = require("../data/companies");

const prisma = new PrismaClient();

async function main() {
  await prisma.company.deleteMany({});
  await prisma.document.deleteMany({});
  for (const company of companies) {
    await prisma.company.create({
      data: company,
      include: { documents: true },
    });
  }
  console.log(await prisma.company.findMany());
  console.log(await prisma.document.findMany());
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect);
