import prisma from '@/lib/prisma';

export default async function handler(req, res) {
  const bots = await prisma.bot.findMany({ where: { ativo: true } });

  for (const bot of bots) {
    let novoLucro = Math.floor(Math.random() * 200); // Lucro aleatório

    let lucroFinal = bot.lucroHoje + novoLucro;
    const clienteCpf = bot.clienteCpf;

    if (lucroFinal >= bot.metaDiaria) {
      const lucroCliente = bot.metaDiaria;
      const lucroMestre = lucroFinal - lucroCliente;

      await prisma.bot.update({
        where: { id: bot.id },
        data: {
          lucroHoje: lucroCliente,
        },
      });

      await prisma.cliente.update({
        where: { cpf: clienteCpf },
        data: {
          saldo: { increment: lucroCliente },
        },
      });

      await prisma.mestre.update({
        where: { id: 1 },
        data: {
          saldo: { increment: lucroMestre },
        },
      });
    } else {
      await prisma.bot.update({
        where: { id: bot.id },
        data: {
          lucroHoje: lucroFinal,
        },
      });

      await prisma.cliente.update({
        where: { cpf: clienteCpf },
        data: {
          saldo: { increment: novoLucro },
        },
      });
    }

    await prisma.historico.create({
      data: {
        botId: bot.id,
        valor: novoLucro,
        data: new Date(),
      },
    });
  }

  res.status(200).json({ message: 'Bots operaram com sucesso' });
}
