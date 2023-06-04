import { useState, useEffect } from "react";
import Calendar from "react-calendar";

export default function ProfileCalendar({ sitterAvailability }) {

  const [startDate, setStartDate] = useState(
    sitterAvailability.availabilityStart
  );
  const [endDate, setEndDate] = useState(sitterAvailability.availabilityEnd);
  useEffect(() => {
    // Set the initial values based on the provided start and end dates
    setStartDate(sitterAvailability.availabilityStart);
    setEndDate(sitterAvailability.availabilityEnd);
    console.log(startDate);
    console.log(endDate);
  }, [sitterAvailability]);
  return (
    <div className="app">
      <div className="calendar-container">
        <Calendar
          value={[startDate, endDate]}
          selectRange={true}
        />
      </div>
      
    </div>
  );
}
