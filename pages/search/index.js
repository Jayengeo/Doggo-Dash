import React, { useEffect, useState } from 'react';
import Navbar from '@/src/components/nav.js';
import SignedInNavbar from '@/src/components/signedInNav.js';
import Maps from '@/src/components/maps';
import { useUser } from '@auth0/nextjs-auth0/client';
import Sidebar from '@/src/components/Search/sidebar';
import CenterContainer from '@/src/components/Search/centerContainer';

export default function Search() {
  const { user } = useUser();
  const [filteredCity, setFilteredCity] = useState('');
  const [minRating, setMinRating] = useState(0);
  const [maxRating, setMaxRating] = useState(200);
  const [dogSitters, setDogSitters] = useState([]);

  const handleSearch = (city, minRating, maxRating) => {
    setFilteredCity(city);
    setMinRating(minRating);
    setMaxRating(maxRating);
  };

  const handleDogSittersUpdate = (sitters) => {
    setDogSitters(sitters);
  };

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
      <div style={{ width: "100%", display: "flex" }}>
        <Sidebar onSearch={handleSearch} style={{ width: "25%" }} />
        <CenterContainer
          filteredCity={filteredCity}
          minRating={minRating}
          maxRating={maxRating}
          onDogSittersUpdate={handleDogSittersUpdate}
          style={{ width: "50%" }}
        />
        <Maps dogSitters={dogSitters} style={{ width: "25%" }} />
      </div>
    </div>
  );
}

