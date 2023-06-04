import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { bookingId } = req.query;

  if (req.method === 'PATCH') {
    try {
      const booking = await prisma.booking.update({
        where: { id: parseInt(bookingId) },
        data: { status: 'accepted' },
      });

      console.log('Booking accepted:', booking); // Add this console log

      res.status(200).json({ message: 'Booking accepted', booking });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else if (req.method === 'DELETE') {
    try {
      await prisma.booking.delete({
        where: { id: parseInt(bookingId) },
      });

      res.status(200).json({ message: 'Booking canceled' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
