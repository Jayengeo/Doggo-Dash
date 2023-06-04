export default async function handler(req, res) {
  if (req.method === "POST") {
    const prisma = new PrismaClient();
    console.log(req.body);
    const userType = req.body.data.userType;
    const firstName = req.body.data.firstName;
    const lastName = req.body.data.lastName;
    const streetAddress = req.body.data.streetAddress;
    const city = req.body.data.city;
    const postalCode = req.body.data.postalCode;
    const province = req.body.data.province;
    const user = await prisma.user.create({
      data: {
        userType,
        firstName,
        lastName,
        streetAddress,
        city,
        postalCode,
        province,
      },
    });
  }
}
