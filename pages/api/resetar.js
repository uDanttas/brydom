import { prisma } from "@/libs/prisma";

export default async function handler(_, res) {
  await prisma.bot.updateMany({
    data: { lucroHoje: 0, ativo: true, metaBatida: false },
  });

  await prisma.botBhacanna.updateMany({
    data: { lucroHoje: 0 },
  });

  res.status(200).json({ sucesso: true });
}
