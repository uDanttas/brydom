import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  try {
    const mestre = await prisma.usuario.findFirst({ where: { papel: "mestre" } });

    if (!mestre) return res.status(404).json({ message: "Mestre não encontrado" });

    const bots = await prisma.bot.findMany({
      where: { clienteId: mestre.id },
    });

    res.status(200).json(bots);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar bots do mestre" });
  }
}
