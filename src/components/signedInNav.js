import React from "react";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faMessage,
  faDog,
} from "@fortawesome/free-solid-svg-icons";



function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SignedInNavbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-start">
            <div className="flex flex-1 items-center sm:items-stretch justify-start">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4 ">
                  <a
                    href="/"
                    className=" text-white rounded-md px-3 py-2 text-sm font-medium "
                  >
                    <FontAwesomeIcon icon={faDog} size="3x" fixedWidth />
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

                  <a
                    href="/messages"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white  
            rounded-md px-3 py-2 flex items-center text-sm font-medium bg-gray-700"
                  >
                    <FontAwesomeIcon icon={faMessage} fixedWidth />
                    <span className="ml-2">Messages</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <Menu as="div" className="relative ml-3">
                <div>
                  <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full hover:bg-gray-700"
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                      alt=""
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/userProfile"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Your Profile
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/bookings"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Bookings
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/petProfile"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Pet Profile
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/api/auth/logout"
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                        >
                          Sign out
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
        </div>
      </>
    </Disclosure>
  );
}
