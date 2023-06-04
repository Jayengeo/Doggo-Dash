import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

module.exports = async (req, res) => {
  try {
    const { email } = JSON.parse(req.body);
    const user = await prisma.user.create({
      data: { email },
    });
    console.log("created user");
  } catch (err) {
    console.log(err);
  } finally {
    await prisma.$disconnect();
    res.send({ received: true });
  }
};  