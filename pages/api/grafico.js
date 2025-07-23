import prisma from '@/lib/prisma';



export default async function handler(req, res) {
  try {
    const historico = await prisma.operacao.findMany({
      orderBy: { createdAt: "desc" },
      take: 50,
    });

    const dados = historico.map((item) => ({
      time: item.createdAt,
      lucro: item.lucro,
    }));

    res.status(200).json(dados);
  } catch (error) {
    console.error("Erro ao buscar gráfico:", error);
    res.status(500).json({ error: "Erro ao buscar dados do gráfico" });
  }
}
