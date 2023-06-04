import React, { useEffect, useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import styles from '../../../styles/booking.module.css';
import { faBook} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DogSitterBookings() {
  const { user } = useUser();
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    if (user) {
      console.log('userId:', user.id); // Log the userId
      try {
        const senderEmail = user.email; // Use the user's email as the senderEmail
        const response = await fetch(`/api/fetchBookings?senderEmail=${encodeURIComponent(senderEmail)}`);

        if (response.ok) {
          const data = await response.json();
          setBookings(data.bookings);
        } else {
          console.error('Error fetching bookings:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  useEffect(() => {
    fetchBookings();
  }, [user]);

  const handleAcceptBooking = async (bookingId) => {
    confirmAlert({
      title: 'Confirm',
      message: 'Are you sure you want to accept this booking?',
      buttons: [
        {
          label: 'Yes',
          onClick: async () => {
            try {
              const response = await fetch(`/api/acceptBooking?bookingId=${bookingId}`, {
                method: 'PATCH',
                headers: {
                  'Content-Type': 'application/json',
                },
              });

              if (response.ok) {
                // Handle success
                console.log('Booking accepted successfully');
                fetchBookings(); // Refetch bookings after accepting
              } else {
                console.error('Error accepting booking:', response.statusText);
              }
            } catch (error) {
              console.error('Error:', error);
            }
          },
        },
        {
          label: 'No',
          onClick: () => {
            // Handle cancel
            console.log('Booking acceptance canceled');
          },
        },
      ],
    });
  };

  const handleCancelBooking = async (bookingId) => {
    confirmAlert({
      title: 'Confirm',
      message: 'Are you sure you want to cancel this booking?',
      buttons: [
        {
          label: 'Yes',
          onClick: async () => {
            try {
              const response = await fetch(`/api/cancelBooking?bookingId=${bookingId}`, {
                method: 'DELETE',
              });

              if (response.ok) {
                // Handle success
                console.log('Booking canceled successfully');
                fetchBookings(); // Refetch bookings after canceling
              } else {
                console.error('Error canceling booking:', response.statusText);
              }
            } catch (error) {
              console.error('Error:', error);
            }
          },
        },
        {
          label: 'No',
          onClick: () => {
            // Handle cancel
            console.log('Booking cancellation canceled');
          },
        },
      ],
    });
  };

  return (
    <div className={styles.container}>
    <h1 className={`${styles['booking-title']} flex justify-center text-2xl font-bold tracking-tight sm:text-2xl mt-6 `}>
    <FontAwesomeIcon icon={faBook} className="mr-3" size="lg"/>
      My Bookings
    </h1>
    {bookings.map((booking) => {
      // Format the date
      const formattedDate = new Date(booking.date).toLocaleDateString();
  
      return (

       <div className={`${styles['booking-item']} p-6 w-1/2  text-lg font-medium leading-6 text-gray-900`} key={booking.id}>
          <p>Date: {formattedDate}</p>
          <p>Status: {booking.status}</p>
          <p>Dog Owner: {booking.sender.firstName} {booking.sender.lastName}</p>
          <p>Dog Sitter: {booking.receiver.firstName} {booking.receiver.lastName}</p>
          {(booking.receiver.email === user.email && booking.status === 'pending') && (
            <button className={`${styles['booking-button-accept']} w-20`} onClick={() => handleAcceptBooking(booking.id)}>
              Accept
            </button>
          )}
          {(booking.sender.email || booking.receiver.email === user.email) && (booking.status === 'accepted' || booking.status === 'pending') && (
            <button className={`${styles['booking-button-cancel']} w-20`} onClick={() => handleCancelBooking(booking.id)}>
              Cancel
            </button>
          )}
          <hr className="my-6" />
        </div>
      );
    })}
      </div>
  )
}
