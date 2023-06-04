import Chat from '../src/components/chat';
import { useUser } from '@auth0/nextjs-auth0/client';
import Navbar from "@/src/components/nav.js";
import SignedInNavbar from "@/src/components/signedInNav.js";

export default function Messages() {
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
      <Chat />
    </>
    
  );
}