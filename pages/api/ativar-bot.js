import prisma from '@/lib/prisma'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { cpf, saldo } = req.body

    if (saldo < 50) return res.json({ mensagem: 'Saldo mínimo para ativar um bot é R$50' })

    const user = await prisma.usuario.findUnique({ where: { cpf } })
    if (!user || user.saldo < saldo) {
      return res.json({ mensagem: 'Saldo insuficiente para ativar bot' })
    }

    // Cria o bot
    await prisma.bot.create({
      data: {
        usuarioCpf: cpf,
        saldo,
        ativo: true
      }
    })

    // Debita do saldo do usuário
    await prisma.usuario.update({
      where: { cpf },
      data: { saldo: { decrement: saldo } }
    })

    res.json({ mensagem: 'Bot ativado com sucesso!' })
  }
}
