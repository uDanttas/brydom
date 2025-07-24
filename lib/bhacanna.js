import prisma from '../lib/prisma.js'

async function executarBotsBhacanna() {
  const mestre = await prisma.usuario.findUnique({
    where: { cpf: '00000000000' }
  })

  if (!mestre) {
    console.error('⚠️ Usuário mestre não encontrado.')
    return
  }

  let totalLucro = 0

  for (let i = 1; i <= 3000; i++) {
    const lucro = Math.random() * 10 // Simula até R$10 por execução
    totalLucro += lucro
  }

  await prisma.usuario.update({
    where: { id: mestre.id },
    data: {
      saldo: { increment: totalLucro },
      lucroHoje: { increment: totalLucro }
    }
  })

  console.log(`✅ Lucro dos 3000 bots Bhacanna: R$${totalLucro.toFixed(2)}`)
}

export default executarBotsBhacanna
