import prisma from '@/lib/prisma'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { cpf, valor } = req.body

    const user = await prisma.usuario.findUnique({ where: { cpf } })
    if (!user || user.saldo < valor) {
      return res.json({ mensagem: 'Saldo insuficiente' })
    }

    await prisma.usuario.update({
      where: { cpf },
      data: { saldo: { decrement: valor } }
    })

    res.json({ mensagem: 'Saque realizado com sucesso' })
  }
}
