import { PrismaClient } from "@prisma/client";
import { parseISO } from 'date-fns'; // Import the parseISO function from date-fns

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { day, startTime, endTime, email } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const availability = await prisma.availability.create({
      data: {
        day,
        startTime: parseISO(startTime), // Convert the string to DateTime using parseISO
        endTime: parseISO(endTime), // Convert the string to DateTime using parseISO
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    });

    console.log("Availability created:", availability);

    res.status(201).json({ availability });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
}
