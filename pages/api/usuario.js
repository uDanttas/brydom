// pages/api/usuario.js
import prisma from '@/lib/prisma'

export default async function handler(req, res) {
  const { cpf } = req.query

  try {
    const usuario = await prisma.usuario.findUnique({
      where: { cpf },
      include: {
        bots: true,
        historico: true,
      },
    })

    if (!usuario) return res.status(404).json({ mensagem: 'Usuário não encontrado' })

    res.status(200).json(usuario)
  } catch (err) {
    console.error(err)
    res.status(500).json({ mensagem: 'Erro ao buscar dados' })
  }
}
