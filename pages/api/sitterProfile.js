import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { id } = req.query;
    console.log("id", id);

    const dogSitter = await prisma.user.findUnique({
      where: {
        id: parseInt(id),
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        city: true,
        availabilityStart: true,
        availabilityEnd: true,
        rating: true,
        description: true,
        streetAddress: true,
        province: true,
        postalCode: true,
        rate: true,
        profilePicture:true
      },
    });
    res.status(200).json(dogSitter);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
