import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  console.log(req.method)
  if (req.method === "POST") { 
    const prisma = new PrismaClient();
    const { data } = req.body; 

    //uses email in form to find user to update
    const existingUser = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }
    // Update user fields in database
    const updatedUser = await prisma.user.update({
      where: { email: data.email },
      data: {
        userType: data.userType,
        firstName: data.firstName,
        lastName: data.lastName,
        streetAddress: data.streetAddress,
        city: data.city,
        postalCode: data.postalCode,
        province: data.province,
        rate: data.rate,
      },
    });
    console.log(data)
    res.status(200).json({
      message: "User updated successfully",
      user: updatedUser,
    });

    await prisma.$disconnect();
  }
}
