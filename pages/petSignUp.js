import {useUser}  from "@auth0/nextjs-auth0/client";
import Navbar from "@/src/components/nav";
import SignedInNavbar from "@/src/components/signedInNav";
import PetSignUpForm from "@/src/components/signUp/petSignUp";
import  {PrismaClient}  from "@prisma/client";


export default function PetSignUp({ breeds }) {
  const { user } = useUser();
  console.log(user)

  return (
    <div>
      {user && (
        <nav>
          <SignedInNavbar />
        </nav>
      )}
      {!user && (
        <nav>
          <Navbar />
        </nav>
      )}
      <PetSignUpForm breeds={breeds} />
    </div>
  );
}

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const breeds = await prisma.breed.findMany();

  return {
    props: { breeds },
  };
}
