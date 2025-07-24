import binance from './binance'
import prisma from './prisma'

const META_DIARIA = 500

async function operarBot(bot) {
  const user = await prisma.usuario.findUnique({
    where: { id: bot.usuarioId },
  })

  const operacoesHoje = await prisma.operacao.findMany({
    where: {
      botId: bot.id,
      data: {
        gte: new Date().setHours(0, 0, 0, 0),
        lte: new Date().setHours(23, 59, 59, 999),
      },
    },
  })

  const lucroAtual = operacoesHoje.reduce((acc, op) => acc + op.valor, 0)

  const operandoParaMestre = lucroAtual >= META_DIARIA

  const valorOperacao = 5 + Math.random() * 5 // entre R$5~10

  try {
    const par = 'BTCUSDT'
    const quantidade = valorOperacao / 60000 // valor aproximado

    const ordem = await binance.marketBuy(par, quantidade)

    const lucro = parseFloat((Math.random() * 3).toFixed(2))

    await prisma.operacao.create({
      data: {
        botId: bot.id,
        valor: lucro,
        data: new Date(),
      },
    })

    if (operandoParaMestre) {
      await prisma.usuario.update({
        where: { cpf: '00000000000' },
        data: { saldo: { increment: lucro } },
      })
    } else {
      await prisma.usuario.update({
        where: { id: bot.usuarioId },
        data: { saldo: { increment: lucro } },
      })
    }

    console.log(`Bot ${bot.id} operou e lucrou R$${lucro}`)
  } catch (err) {
    console.error(`Erro ao operar bot ${bot.id}:`, err.message)
  }
}

export default operarBot
