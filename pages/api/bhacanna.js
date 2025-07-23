import prisma from '@/lib/prisma'

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const bhacanna = await prisma.bot.findMany({
      where: { usuarioCpf: 'mestre' },
      take: 3000,
      orderBy: { id: 'asc' }
    })

    res.json({ bhacanna })
  }
}
