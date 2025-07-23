import prisma from '@/lib/prisma'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Busca todos os bots ativos (clientes e Bhacanna)
    const bots = await prisma.bot.findMany({ where: { ativo: true } })

    for (const bot of bots) {
      const lucro = Math.random() * 5 // lucro aleatório entre 0 e 5 reais
      const cpf = bot.usuarioCpf

      // Atualiza saldo interno do bot
      await prisma.bot.update({
        where: { id: bot.id },
        data: { saldo: { increment: lucro } }
      })

      // Registra operação no histórico
      await prisma.operacao.create({
        data: {
          usuarioCpf: cpf,
          valor: lucro,
          botId: bot.id,
          timestamp: new Date()
        }
      })

      // Agora verifica se é bot do cliente ou Bhacanna
      if (cpf !== 'mestre') {
        const historicoHoje = await prisma.operacao.findMany({
          where: {
            usuarioCpf: cpf,
            botId: bot.id,
            timestamp: {
              gte: new Date(new Date().setHours(0, 0, 0, 0)) // início do dia
            }
          }
        })

        const lucroHoje = historicoHoje.reduce((acc, cur) => acc + cur.valor, 0)

        if (lucroHoje >= 500) {
          // Meta batida — lucro extra vai para o mestre
          await prisma.bot.update({
            where: { id: bot.id },
            data: { ativo: false } // pausa o bot do cliente até o próximo dia/manual
          })

          await prisma.usuario.update({
            where: { cpf: 'mestre' },
            data: { saldo: { increment: lucro } }
          })
        } else {
          // Lucro normal vai para o cliente
          await prisma.usuario.update({
            where: { cpf },
            data: { saldo: { increment: lucro } }
          })
        }
      } else {
        // Bhacanna: lucro 100% para o mestre
        await prisma.usuario.update({
          where: { cpf: 'mestre' },
          data: { saldo: { increment: lucro } }
        })
      }
    }

    res.json({ mensagem: 'Bots operaram com sucesso' })
  }
}
