import Navbar from "@/src/components/nav";
import SignedInNavbar from "@/src/components/signedInNav";
import { PrismaClient } from "@prisma/client";
import DogList from "@/src/components/doglist";
import { format } from "date-fns";
import { useUser } from "@auth0/nextjs-auth0/client";
import CurrentUser from "@/src/components/currentUser";

export default function PetProfile({ dogs }) {
  const { user } = useUser();
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
      <a href="/petSignUp">
        <button>ADD PET</button>
      </a>
      <h1>Current Pets</h1>
      <DogList dogs={dogs} />
    </div>
  );
}


export async function getStaticProps() {
  const prisma = new PrismaClient();
 


  const dogs = await prisma.dog.findMany();

  const breeds = await prisma.breed.findMany();

  const dogBreed = (id) => {
    for (let breed of breeds) {
      if (breed.id === id) {
        return breed.name;
      }
    }
  };

  const serializedDogs = dogs.map((dog) => {
    return {
      temperament: dog.temperament,
      weight: dog.weight,
      name: dog.name,
      breed: dogBreed(dog.breedId),
      yearOfBirth: format(dog.yearOfBirth, "MM-dd-yyyy"),
    };
  });

  return {
    props: {
      dogs: serializedDogs,
    },
  };
}
