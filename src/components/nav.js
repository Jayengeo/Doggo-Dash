import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass,faUserPlus, faDog } from '@fortawesome/free-solid-svg-icons'


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-start">
          
          <div className="flex flex-1 items-center sm:items-stretch justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 ">
                <a
                  href="/"
                  className=" text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  <FontAwesomeIcon icon={faDog} size="3x"  fixedWidth />
                  <span>DOGGO DASH</span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-1 items-center sm:items-stretch justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 " id="signedOutNavigationLeft">
                <a
                  href="/search"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white  
            rounded-md px-6 py-2 flex items-center text-sm font-medium bg-gray-700"
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} fixedWidth />
                  <span className="ml-2">Search</span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-1 items-center sm:items-stretch justify-end">
            <div className="hidden sm:ml-6 sm:block">
              <div>
                <a
                  href="/api/auth/login"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white  
            rounded-md px-6 py-2 flex items-center text-sm font-medium bg-gray-700"
                >
                  <FontAwesomeIcon icon={faUserPlus} fixedWidth />
                  <span className="flex items-center ml-2 whitespace-nowrap">
                    Sign up
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
