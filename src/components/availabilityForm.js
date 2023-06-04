import React, { useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function AvailabilityForm() {
  const [day, setDay] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const { user } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an availability object
    const availability = {
      day,
      startTime,
      endTime,
      email: user?.email, // Set the user email to retrieve the user ID
    };

    // Perform the API call to create the availability
    createAvailability(availability);
  };

  const createAvailability = (availability) => {
    fetch('../api/createAvailability', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(availability),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="day">Day:</label>
          <input
            type="text"
            id="day"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="startTime">Start Time:</label>
          <input
            type="datetime-local"
            id="startTime"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="endTime">End Time:</label>
          <input
            type="datetime-local"
            id="endTime"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </div>
        <button type="submit">Create Availability</button>
      </form>
    </div>
  );
}
