import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function sittersHandler(req, res) {
  const sitters = await prisma.user.findMany({
    where: {
      user_type: 'Dog Sitter',
    },
  })

  res.json(sitters)
}
