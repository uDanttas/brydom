import cron from 'node-cron'
import prisma from '../lib/prisma.js'

async function executarBotsBhacanna() {
  const mestre = await prisma.usuario.findUnique({
    where: { cpf: '00000000000' }, // CPF fixo do mestre
  })

  if (!mestre) {
    console.error('❌ Usuário mestre não encontrado.')
    return
  }

  let totalLucro = 0
  for (let i = 0; i < 3000; i++) {
    const lucro = Math.random() * 10 // até R$10 por bot
    totalLucro += lucro
  }

  await prisma.usuario.update({
    where: { id: mestre.id },
    data: {
      saldo: { increment: totalLucro },
      lucroHoje: { increment: totalLucro },
    },
  })

  console.log(`✅ Lucro dos Bhacanna: R$${totalLucro.toFixed(2)}`)
}

// Executa a cada 1 minuto
console.log('⏳ Rodando agendador dos bots Bhacanna a cada minuto...')

cron.schedule('* * * * *', async () => {
  const agora = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })
  console.log(`🕐 Executando em: ${agora}`)
  await executarBotsBhacanna()
})
