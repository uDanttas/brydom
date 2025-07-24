const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Cria o usuário mestre se ainda não existir
  const mestre = await prisma.usuario.upsert({
    where: { cpf: '00000000000' },
    update: {},
    create: {
      cpf: '00000000000',
      senha: 'sagui',
      saldo: 10000,
      tipo: 'mestre',
    },
  });

  console.log('Usuário mestre criado ou já existente:', mestre.cpf);
}

main()
  .then(() => {
    console.log('✅ Seed finalizado com sucesso');
    return prisma.$disconnect();
  })
  .catch((e) => {
    console.error('❌ Erro no seed:', e);
    return prisma.$disconnect();
  });
