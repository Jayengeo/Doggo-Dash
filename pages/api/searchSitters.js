import { PrismaClient } from '@prisma/client';
import axios from 'axios';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { city } = req.query;

  const dogSitters = await prisma.user.findMany({
    where: {
      userType: 'dogSitter',
      city: city, // Filter based on the specified city
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      city: true,
      availabilityStart: true,
      availabilityEnd: true,
      rating: true,
      description:true,
      streetAddress: true,
      province: true,
      postalCode: true,
      rate: true,
      profilePicture: true,
    },
  });

  const dogSittersWithCoordinates = await convertAddressesToCoordinates(dogSitters);
  res.status(200).json(dogSittersWithCoordinates);
}

async function convertAddressesToCoordinates(dogSitters) {
  const dogSittersWithCoordinates = [];
  for (const dogSitter of dogSitters) {
    const address = `${dogSitter.streetAddress}, ${dogSitter.city}, ${dogSitter.province}, ${dogSitter.postalCode}`;
    const coordinates = await getGeocode(address);
    if (coordinates) {
      dogSittersWithCoordinates.push({ ...dogSitter, coordinates });
      // console.log(`Address: ${address}, Coordinates: ${coordinates.lat}, ${coordinates.lng}`);
    }
  }
  return dogSittersWithCoordinates;
}

async function getGeocode(address) {
  try {
    const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: address,
        key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      },
    });
    const { results } = response.data;
    if (results && results.length > 0) {
      const { lat, lng } = results[0].geometry.location;
      return { lat, lng };
    }
  } catch (error) {
    console.error(error);
  }
  return null;
}
