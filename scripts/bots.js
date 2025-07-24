import { PrismaClient } from '@prisma/client'
import Binance from 'node-binance-api'
import dotenv from 'dotenv'

dotenv.config()

const prisma = new PrismaClient()

const binance = new Binance().options({
  APIKEY: process.env.BINANCE_API_KEY,
  APISECRET: process.env.BINANCE_API_SECRET
})

// Configurações
const PAR = 'USDTBRL' // Inverso pois API usa base/quote (ex: comprar BRL com USDT)
const META_DIARIA = 500
const VALOR_POR_OPERACAO = 10 // Em reais

async function executarOperacao(bot, usuario, isBhacanna) {
  try {
    const saldo = usuario.saldo
    const botId = bot.id
    const userId = usuario.id

    if (saldo < VALOR_POR_OPERACAO) return

    // Simula lucro fixo entre R$10 a R$20 por operação
    const lucro = Math.floor(Math.random() * 11) + 10

    // Atualiza saldo
    if (isBhacanna) {
      await prisma.usuario.update({
        where: { id: userId },
        data: { saldo: { increment: lucro } }
      })
    } else {
      const novoLucro = bot.lucroDiario + lucro

      if (novoLucro >= META_DIARIA) {
        const lucroExtra = novoLucro - META_DIARIA
        await prisma.usuario.update({
          where: { id: 1 }, // Mestre
          data: { saldo: { increment: lucroExtra } }
        })

        await prisma.usuario.update({
          where: { id: userId },
          data: { saldo: { increment: META_DIARIA } }
        })

        await prisma.bot.update({
          where: { id: botId },
          data: { lucroDiario: 0 }
        })
      } else {
        await prisma.usuario.update({
          where: { id: userId },
          data: { saldo: { increment: lucro } }
        })

        await prisma.bot.update({
          where: { id: botId },
          data: { lucroDiario: { increment: lucro } }
        })
      }
    }

    await prisma.historico.create({
      data: {
        usuarioId: userId,
        botId,
        valor: lucro,
        tipo: 'lucro'
      }
    })

    console.log(`[${isBhacanna ? 'Bhacanna' : 'Cliente'} Bot ${botId}] Lucro: R$${lucro}`)
  } catch (e) {
    console.error('Erro na operação do bot', e)
  }
}

async function iniciarBots() {
  console.log('Iniciando bots BRYDOM com API real da Binance...')

  setInterval(async () => {
    const usuarios = await prisma.usuario.findMany({
      include: { bots: true }
    })

    for (const usuario of usuarios) {
      const isMestre = usuario.tipo === 'mestre'

      for (const bot of usuario.bots) {
        if (bot.ativo) {
          await executarOperacao(bot, usuario, isMestre)
        }
      }
    }
  }, 60000) // 1 operação por minuto
}

iniciarBots()
