import React, { useState } from 'react';
import FlightList from './Fly/FlightList.jsx';
import BookingForm from './Fly/BookingForm.jsx';

function App() {
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [bookingInfo, setBookingInfo] = useState(null);

  const handleBooking = (flight) => {
    setSelectedFlight(flight);
  };

  const handleConfirmBooking = (booking) => {
    setBookingInfo(booking);
  };

  return (
    <div>
      <h1>Airline Booking System</h1>
      {!selectedFlight && <FlightList onBooking={handleBooking} />}
      {selectedFlight && !bookingInfo && (
        <BookingForm
          selectedFlight={selectedFlight}
          onConfirmBooking={handleConfirmBooking}
        />
      )}
      {bookingInfo && (
        <div>
          <h2>Booking Confirmation</h2>
          <p>Passenger Name: {bookingInfo.passengerName}</p>
          <p>Passenger Email: {bookingInfo.passengerEmail}</p>
          <p>Flight: {bookingInfo.flight.airline} - {bookingInfo.flight.flightNumber}</p>
          <button onClick={() => setSelectedFlight(null)}>Return to Flights</button>
        </div>
      )}
    </div>
  );
}



export default App;
