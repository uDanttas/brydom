import prisma from '@/lib/prisma';

export default async function handler(req, res) {
  const { cpf } = req.query;

  if (!cpf) return res.status(400).json({ error: 'CPF não informado' });

  const cliente = await prisma.cliente.findUnique({
    where: { cpf },
    include: {
      bots: true,
    },
  });

  if (!cliente) return res.status(404).json({ error: 'Cliente não encontrado' });

  res.status(200).json(cliente);
}
