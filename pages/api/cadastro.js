import prisma from '@/lib/prisma'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { cpf, senha } = req.body

    const existe = await prisma.usuario.findUnique({ where: { cpf } })
    if (existe) return res.json({ mensagem: 'CPF já cadastrado' })

    await prisma.usuario.create({
      data: { cpf, senha, saldo: 0 }
    })

    res.json({ mensagem: 'Cadastro realizado com sucesso' })
  }
}
