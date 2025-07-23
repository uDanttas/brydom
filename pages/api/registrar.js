import prisma from "@/lib/prisma";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { cpf, senha, papel } = req.body;

    try {
      const existe = await prisma.usuario.findUnique({ where: { cpf } });

      if (existe) {
        return res.status(400).json({ message: "Usuário já existe" });
      }

      const novo = await prisma.usuario.create({
        data: { cpf, senha, papel },
      });

      res.status(200).json(novo);
    } catch (error) {
      res.status(500).json({ message: "Erro ao registrar" });
    }
  } else {
    res.status(405).json({ message: "Método não permitido" });
  }
}
