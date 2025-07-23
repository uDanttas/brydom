import prisma from '@/lib/prisma';

export default async function handler(req, res) {
  const { cpf } = req.query;

  const cliente = await prisma.cliente.findUnique({
    where: { cpf },
    include: {
      bots: true,
    },
  });

  if (!cliente) return res.status(404).json({ error: 'Cliente não encontrado' });

  const saldo = cliente.saldo;
  const botsAtivos = cliente.bots.length;
  const lucroHoje = cliente.bots.reduce((total, bot) => total + bot.lucroHoje, 0);

  res.status(200).json({ saldo, botsAtivos, lucroHoje });
}
