import React, { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import DatePicker from "react-datepicker";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

export default function BookingButton({ receiverId }) {
  const { user, isLoading } = useUser();
  const [selectedDate, setSelectedDate] = useState(null);

  const handleBooking = async () => {
    if (!user) {
      // Redirect to the login page if the user is not signed in
      window.location.href = "/api/auth/login";
      return;
    }

    const senderId = user.email; // Use the user's email as the senderId

    try {
      // Perform the API call to create a booking
      const response = await fetch("/api/createBooking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          senderId,
          receiverId,
          selectedDate,
        }),
      });

      if (!response.ok) {
        console.error("Error creating booking:", response.statusText);
        return;
      }

      confirmAlert({
        title: "Booking Request Sent",
        message: "Your booking request has been sent successfully.",
        buttons: [
          {
            label: "OK",
            onClick: () => {
              // Handle any UI updates or further actions after the user clicks OK
            },
          },
        ],
      });

      const data = await response.json();
      console.log(data);
      // Handle the response and any UI updates
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1 className=" flex justify-center  mt-2 mb-2 text-1xl tracking-tight text-gray-900">
        {" "}
        Select Date
      </h1>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="yyyy-MM-dd"
      />
      <button
        className="w-full py-2 mt-4 bg-blue-500 text-white rounded-md flex items-center justify-center hover:bg-blue-600"
        onClick={handleBooking}
      >
        <FontAwesomeIcon icon={faBook} className="mr-3" size="lg" />
        Book
      </button>
    </div>
  );
}
