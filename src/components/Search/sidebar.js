import React, { useState } from 'react';
import styles from '../../../styles/sidebar.module.css';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Sidebar city search filter and min/max filter
export default function Sidebar({ onSearch }) {
  const [city, setCity] = useState('');
  const [minRating, setMinRating] = useState(1);
  const [maxRating, setMaxRating] = useState(100);

  const handleSearch = () => {
    onSearch(city, parseInt(minRating), parseInt(maxRating));
  };

  return (
    <div className={styles.sidebar}>
      <label className="text-2xl font-bold tracking-tight sm:text-2xl">CITY</label>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <div>
      <label className="text-2xl font-bold tracking-tight sm:text-2xl">MIN RATE</label>
        <input
          type="number"
          value={minRating}
          onChange={(e) => setMinRating(e.target.value)}
        />
      </div>
      <div>
      <label className="text-2xl font-bold tracking-tight sm:text-2xl">MAX RATE</label>
        <input
          type="number"
          value={maxRating}
          onChange={(e) => setMaxRating(e.target.value)}
        />
      </div>
      <div className="flex justify-center">
        <button className="rounded-md" onClick={handleSearch}>
          <FontAwesomeIcon icon={faMagnifyingGlass} fixedWidth />
          Search
        </button>
      </div>
    </div>
  );
}