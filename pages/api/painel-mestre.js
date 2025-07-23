import prisma from '@/lib/prisma'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const historico = await prisma.operacao.findMany({
      where: { usuarioCpf: 'mestre' },
      orderBy: { timestamp: 'desc' }
    })

    const total = historico.reduce((acc, cur) => acc + cur.valor, 0)

    res.json({
      lucroTotal: total,
      operacoes: historico
    })
  }
}
