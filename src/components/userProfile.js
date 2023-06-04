
import { useUser } from "@auth0/nextjs-auth0/client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { faUser,faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function UserProfile({ userProfiles }) {
  const [currentUser, setCurrentUser] = useState({});
  const { user } = useUser();
  const router = useRouter();
  const findCurrentUser = async () => {
    for (const userProfile of userProfiles) {
      if (userProfile.email === user.email) {
        setCurrentUser(userProfile);
      }
    }
  };

  useEffect(() => {
    console.log(user);
    findCurrentUser();
  }, []);

  const handleReplace = () => {
    router.replace("/updateUserProfile");
  };

  return (
    <div className=  "flex justify-center ">
      <div className=" p-6 w-1/2  ">
        <div className="mt-6 ">
          <h1 className=" flex justify-center text-2xl font-bold tracking-tight sm:text-2xl">
          <FontAwesomeIcon icon={faUser} className="mr-3" size="lg" />
            User Profile
          </h1>
          <dl className="divide-y divide-gray-350">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-lg font-medium leading-6 text-gray-900">
                First name
              </dt>
              <dd className=" text-lg mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {currentUser.firstName}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-lg font-medium leading-6 text-gray-900">
                Last Name
              </dt>
              <dd className=" text-lg mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {currentUser.lastName}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-lg font-medium leading-6 text-gray-900">
                Email
              </dt>
              <dd className=" text-lg mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {user.email}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-lg font-medium leading-6 text-gray-900">
                User Type
              </dt>
              <dd className=" text-lg mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {currentUser.userType}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-lg font-medium leading-6 text-gray-900">
                Street Address
              </dt>
              <dd className=" text-lg mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {currentUser.streetAddress}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-lg font-medium leading-6 text-gray-900">
                City
              </dt>
              <dd className=" text-lg mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {currentUser.city}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-lg font-medium leading-6 text-gray-900">
                Postal Code
              </dt>
              <dd className=" text-lg mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {currentUser.postalCode}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-lg font-medium leading-6 text-gray-900">
                Province
              </dt>
              <dd className=" text-lg mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {currentUser.province}
              </dd>
            </div>
          </dl>
          <button className="w-full py-2 mt-4 bg-blue-500 text-white rounded-md flex items-center justify-center" onClick={handleReplace}>
          <FontAwesomeIcon icon={faPenToSquare} className="mr-2" />
          Update
        </button>
        </div>
      </div>
    </div>
  );
}
