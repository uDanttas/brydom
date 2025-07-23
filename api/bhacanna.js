// pages/api/bhacanna.js
import prisma from "@/lib/prisma"

export default async function handler(req, res) {
  const bots = await prisma.bhacanna.findMany()
  const lucroTotal = bots.reduce((acc, bot) => acc + bot.lucro, 0)

  res.status(200).json({ bots, lucroTotal })
}
