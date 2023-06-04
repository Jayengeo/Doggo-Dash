import { useEffect, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import styles from "../../styles/map.module.css";





  export default function Maps({ dogSitters }) {
    const { isLoaded } = useLoadScript({
      googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });
  
    const [mapCenter, setMapCenter] = useState(null);
  
    useEffect(() => {
      // Set the initial center of the map based on the first dog sitter's coordinates
      if (dogSitters.length > 0) {
        setMapCenter(dogSitters[0].coordinates);
      }
    }, [dogSitters]);
  
    if (!isLoaded) return <div>Loading...</div>;

    // Function to scroll to a specific dog sitter on the page
    const scrollToDogSitter = (dogSitterId) => {
      const dogSitterElement = document.getElementById(dogSitterId);
      if (dogSitterElement) {
        dogSitterElement.scrollIntoView({ behavior: "smooth", block: "start", inline: "start" });
      }
    };
    
  
    return (
      <div className={styles.mapContainer}>
        <Map dogSitters={dogSitters} center={mapCenter} setMapCenter={setMapCenter} scrollToDogSitter={scrollToDogSitter}/>
      </div>
    );
  }
  
  //Google Map function
  function Map({ dogSitters, center, setMapCenter, scrollToDogSitter }) {
    const { isLoaded } = useLoadScript({
      googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    });
  
    useEffect(() => {
      if (dogSitters.length > 0) {
        // Set the center of the map to the first dog sitter's coordinates
        setMapCenter(dogSitters[0].coordinates);
      }
    }, [dogSitters, setMapCenter]);
  
    if (!isLoaded) return <div>Loading...</div>;
  
    return (
      <GoogleMap zoom={13} center={center} mapContainerClassName={styles.mapContainer}>
      {dogSitters.map((dogSitter) => (
        <MarkerF
          key={dogSitter.id}
          position={dogSitter.coordinates}
          onClick={() => {
            setMapCenter(dogSitter.coordinates);
            scrollToDogSitter(dogSitter.id); // Scroll to the clicked dog sitter
          }}
        />
      ))}
    </GoogleMap>
    );
  }
  
