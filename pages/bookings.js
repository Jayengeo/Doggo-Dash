import DogSitterBookings from '../src/components/bookings/dogSitterBookings';
import Navbar from "@/src/components/nav.js";
import SignedInNavbar from "@/src/components/signedInNav.js";
import { useUser } from '@auth0/nextjs-auth0/client';

export default function DogSitterBookingsPage() {
  const { user } = useUser(); // Destructure the `user` property from the hook result
  console.log("Component userId", user);
  
  return (
    <div >
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
      <DogSitterBookings />
    </div>
  );
}
