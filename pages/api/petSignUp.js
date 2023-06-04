import { PrismaClient } from "@prisma/client";


export default async function handler(req, res) {

  if (req.method === "POST") {
    const prisma = new PrismaClient();
    const { data } = req.body 

    
    
  
    const currentUser = await prisma.user.findUnique({
      where: { 
        email: data.userEmail , 
      },
    });
    
    const ownerId = currentUser.id
    const name = data.name;
    const weight = data.weight;
    const temperament = data.temperament;
    const breedId = data.breedId;
    const comments = data.comments;
    const yearOfBirth = data.date
    
    
    await prisma.dog.create({
      data: {
        name,
        yearOfBirth,
        weight,
        temperament,
        breedId,
        ownerId,
        comments,
      },
    });
  }
} 

