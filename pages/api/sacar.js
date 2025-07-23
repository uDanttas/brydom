import prisma from '@/lib/prisma';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { cpf, valor } = req.body;

    const cliente = await prisma.cliente.findUnique({ where: { cpf } });
    if (!cliente) return res.status(404).json({ error: 'Cliente não encontrado' });

    if (cliente.saldo < valor) {
      return res.status(400).json({ error: 'Saldo insuficiente' });
    }

    await prisma.cliente.update({
      where: { cpf },
      data: {
        saldo: { decrement: Number(valor) },
      },
    });

    res.status(200).json({ message: 'Saque realizado com sucesso' });
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
}
