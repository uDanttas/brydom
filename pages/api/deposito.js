import prisma from '@/lib/prisma'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { cpf, valor } = req.body

    const user = await prisma.usuario.findUnique({ where: { cpf } })
    if (!user) return res.json({ mensagem: 'Usuário não encontrado' })

    await prisma.usuario.update({
      where: { cpf },
      data: { saldo: { increment: valor } }
    })

    res.json({ mensagem: 'Depósito realizado com sucesso' })
  }
}
