// prisma/seed.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.mestre.create({
    data: {
      nome: 'Dom Mestre',
      senha: 'sagui',
      saldo: 0,
    },
  });

  await prisma.cliente.create({
    data: {
      cpf: '11122233344',
      senha: 'leao',
      saldo: 1000,
      bots: {
        create: [
          { ativo: true, metaBatida: false, lucroHoje: 0 },
          { ativo: true, metaBatida: false, lucroHoje: 0 },
        ],
      },
    },
  });

  for (let i = 0; i < 3000; i++) {
    await prisma.bhacanna.create({
      data: { lucro: 0 },
    });
  }

  console.log('✅ Seed finalizado!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
