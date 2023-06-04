import Navbar from "@/src/components/nav.js";
import SignedInNavbar from "@/src/components/signedInNav.js";
import { useUser } from '@auth0/nextjs-auth0/client';
import DogSitterProfile from "@/src/components/dogSitterProfile";
import React, { useState } from 'react';

export default function SitterProfilePage() {
  const { user } = useUser();
  
  const [filteredCity, setFilteredCity] = useState('');

  const handleSearch = (city) => {
    setFilteredCity(city);
  };

  
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
      <DogSitterProfile filteredCity={filteredCity}/>
    </>
    
  );
}