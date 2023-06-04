import React, { useEffect, useState } from "react";
import styles from "../../../styles/centerContainer.module.css";
import axios from "axios";
import Link from "next/link";
import { StarIcon } from "@heroicons/react/20/solid";
import MyLoader from "../myLoader";

export default function CenterContainer({
  filteredCity,
  minRating,
  maxRating,
  onDogSittersUpdate,
  selectedDogSitterId, // New prop to track the selected dog sitter
}) {
  const [dogSitters, setDogSitters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  
  // Function to search dog sitters based on filters
  const searchDogSitters = async (city, minRating, maxRating) => {
    try {
      setIsLoading(true); // Set loading state to true while data is being fetched

      let response = await axios.get(`/api/searchSitters`);
      let filteredDogSitters = response.data;

      if (city) {
        filteredDogSitters = filteredDogSitters.filter(
          (dogSitter) => dogSitter.city.toLowerCase() === city.toLowerCase()
        );
      }

      const min = minRating !== "" ? parseInt(minRating) : undefined;
      const max = maxRating !== "" ? parseInt(maxRating) : undefined;

      filteredDogSitters = filteredDogSitters.filter((dogSitter) => {
        if (min !== undefined && dogSitter.rate < min) {
          return false;
        }
        if (max !== undefined && dogSitter.rate > max) {
          return false;
        }
        return true;
      });

      setDogSitters(filteredDogSitters);
      setIsLoading(false); // Set loading state to false once data is fetched
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Trigger dog sitter search whenever filters change
    searchDogSitters(filteredCity, minRating, maxRating);
  }, [filteredCity, minRating, maxRating]);

  useEffect(() => {
    // Callback function to pass the updated dog sitters to the parent component
    onDogSittersUpdate(dogSitters);
  }, [dogSitters]);


  return (
    <div className={styles.centerContainer}>
      {isLoading ? ( //render skeleton loader
        <>
          <MyLoader />
          <MyLoader />
          <MyLoader />
          <MyLoader />
          <MyLoader />
          <MyLoader />
          <MyLoader />
          <MyLoader />
          <MyLoader />
        </>
      ) : (
        //render dog sitter markers
        dogSitters.map((dogSitter) => (
          <Link
            key={dogSitter.id}
            id={dogSitter.id}
            className={`${styles.dogSitterContainer} ${styles.hoverShadow} ${
              selectedDogSitterId === dogSitter.id ? styles.selected : ""
            }`}
            href={`/search/${dogSitter.id}`}
          >
            <div className={styles.profilePictureContainer}>
              <img
                src={dogSitter.profilePicture}
                alt="Profile Picture"
                className={styles.profilePicture}
              />
            </div>
            <div>
              <p
                className={`${styles.sitterName} ${
                  selectedDogSitterId === dogSitter.id ? styles.selectedName : ""
                }`}
              >
                <span>{dogSitter.firstName}</span> {dogSitter.lastName}
              </p>
              <p className={styles.city}>City: {dogSitter.city}</p>
              <div className={styles.rateContainer}>
                <p className={styles.rate}>Rate: ${dogSitter.rate} per night</p>
              </div>
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => {
                  const starClassName =
                    dogSitter.rating > rating ? "text-yellow-400" : "text-gray-400";

                  return (
                    //rating icons
                    <StarIcon
                      key={rating}
                      className={classNames(starClassName, "h-5 w-5 flex-shrink-0")}
                      aria-hidden="true"
                    />
                  );
                })}
              </div>
            </div>
              <p className={styles.description}>"{dogSitter.description}"</p>
          </Link>
        ))
      )}
    </div>
  );
}
