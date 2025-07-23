// pages/api/deposito.js
import prisma from "@/lib/prisma"

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end()

  const { cpf, valor } = req.body

  if (!cpf || !valor || valor <= 0) return res.status(400).json({ erro: "Dados inválidos." })

  const usuario = await prisma.usuario.findUnique({ where: { cpf } })
  if (!usuario) return res.status(404).json({ erro: "Usuário não encontrado." })

  await prisma.usuario.update({
    where: { cpf },
    data: { saldo: { increment: valor } }
  })

  await prisma.operacao.create({
    data: {
      usuarioId: usuario.id,
      tipo: "deposito",
      valor,
    }
  })

  res.status(200).json({ sucesso: true })
}
