import { useState, useEffect } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import { useRouter } from "next/router";
import ProfileCalendar from "@/src/components/profileCalendar";
import BookingButton from "@/src/components/bookingButton"; 
import { faMessage, faCalendarDays} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DogSitterProfile() {
  const [dogSitter, setDogSitter] = useState({});

  const router = useRouter();
  const currentUser = router.query.id;

  const handleReplace = () => {
    router.replace("/messages");
  };

  const searchDogSitter = async () => {
    try {
      const response = await axios.get(`/api/sitterProfile?id=${currentUser}`);
      const fetchedDogSitter = response.data;

      // Update the dogSitter object to include the id property
      const updatedDogSitter = {
        ...fetchedDogSitter,
        id: fetchedDogSitter.id, // Assign the id value from the fetchedDogSitter
      };

      setDogSitter(updatedDogSitter);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    searchDogSitter();
  }, []);

  return (
    <div className="bg-white">
      <div className="pt-6">
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={dogSitter.profilePicture}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                {dogSitter.firstName} {dogSitter.lastName}
              </h1>
              <div>
                <h3 className="mt-4 text-lg font-medium text-gray-900"></h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {dogSitter.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">profile information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              Rate: ${dogSitter.rate}/night
            </p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        dogSitter.rating > rating
                          ? "text-gray-900"
                          : "text-gray-200",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{dogSitter.rating} out of 5 stars</p>
                <a
                  href={reviews.href}
                  className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>
            <h1 className=" flex justify-center  mt-4 mb-2 text-2xl tracking-tight text-gray-900"> 
            <FontAwesomeIcon icon={faCalendarDays} className="mr-3" size="lg" />
            Availability
            </h1>
            <ProfileCalendar sitterAvailability={dogSitter} />

            <button
              onClick={handleReplace}
              className="w-full py-2 mt-4 bg-blue-500 text-white rounded-md flex items-center justify-center hover:bg-blue-600"
            >
             <FontAwesomeIcon icon={faMessage} className="mr-3" size="lg" />
              Contact
            </button>
            <div>
              <BookingButton senderId={currentUser} receiverId={dogSitter.id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
