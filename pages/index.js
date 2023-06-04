
import Navbar from "@/src/components/nav.js";
import SignedInNavbar from "@/src/components/signedInNav.js";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";



export default function Home() {
 
  const router = useRouter();
  const handleReplace = () => {
    router.replace("/search");
  };


  const { user } = useUser();
  return (
    <>
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
         <div className="relative h-screen">
        <img
          src="https://images.unsplash.com/photo-1562176546-95420556c872?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <div className="max-w-2xl text-center">
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">DOGGO DASH</h1>
            <p className="mt-6 text-lg leading-8 text-grey-300">
            "Our dog sitting app connects dog owners with trusted and experienced sitters, ensuring their furry friends receive the love and care they deserve while they're away.
With a user-friendly interface, our app allows pet owners to easily book reliable dog sitters based on their location, availability, and specific needs, giving them peace of mind and their dogs a home away from home.
Whether it's for a weekend getaway or a long vacation, our dog sitting app is the go-to solution for responsible dog owners who want their pets to be in safe hands, creating a stress-free experience for both owners and their beloved dogs."
            </p>
            <button className="px-6 py-3 mt-8 text-white bg-blue-600 rounded-lg hover:bg-blue-700" onClick={handleReplace}>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );;
}

