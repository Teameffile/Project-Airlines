import React, { useState } from 'react';

const mockFlights = [
  {
    id: 1,
    airline: 'Airline A',
    flightNumber: 'A123',
    origin: 'New York',
    destination: 'Los Angeles',
    departureTime: '2023-09-10T10:00:00Z',
    price: 300,
  },
  {
    id: 2,
    airline: 'Airline B',
    flightNumber: 'B456',
    origin: 'Chicago',
    destination: 'San Francisco',
    departureTime: '2023-09-12T12:00:00Z',
    price: 350,
  },
  {
    id: 3,
    airline: 'Airline C',
    flightNumber: 'C323',
    origin: 'New Jersy',
    destination: 'Budapest',
    departureTime: '2023-10-12T13:00:00Z',
    price: 700,
  },
  {
    id:4 ,
    airline: 'Airline D',
    flightNumber: 'L678',
    origin: 'Coimbatore',
    destination: 'Punjab',
    departureTime: '2023-03-30T23:00:00Z',
    price: 450,
  },
  {
    id: 5,
    airline: 'Airline E',
    flightNumber: 'P209',
    origin: 'London',
    destination: 'Mexico',
    departureTime: '2023-07-24T14:00:00Z',
    price: 300,
  },
  
];

function FlightList({ onBooking }) {
  return (
    <div>
      <h1>Available Flights</h1>
      <table>
        <thead>
          <tr>
            <th>Flight</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Departure Time</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {mockFlights.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.airline} - {flight.flightNumber}</td>
              <td>{flight.origin}</td>
              <td>{flight.destination}</td>
              <td>{new Date(flight.departureTime).toLocaleString()}</td>
              <td>${flight.price}</td>
              <td>
                <button onClick={() => onBooking(flight)}>Book</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FlightList;
