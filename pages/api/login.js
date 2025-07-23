import prisma from '@/lib/prisma'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { cpf, senha } = req.body

    const user = await prisma.usuario.findUnique({ where: { cpf } })
    if (!user || user.senha !== senha) {
      return res.json({ mensagem: 'CPF ou senha inválidos' })
    }

    res.json({ mensagem: 'Login bem-sucedido', cpf: user.cpf })
  }
}
