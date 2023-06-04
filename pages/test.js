import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import AvailabilityForm from '../src/components/availabilityForm';
import Navbar from '@/src/components/nav.js' 
import SignedInNavbar from '@/src/components/signedInNav.js';

export default function CreateAvailabilityPage() {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
  
      {user ? (
        <AvailabilityForm user={user} />
      ) : (
        <div>Please log in to create availability.</div>
      )}
    </div>
  );
}
