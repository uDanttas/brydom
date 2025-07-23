import prisma from '@/lib/prisma'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { cpf } = req.query

    const historico = await prisma.operacao.findMany({
      where: { usuarioCpf: cpf },
      orderBy: { timestamp: 'desc' }
    })

    res.json({ historico })
  }
}
