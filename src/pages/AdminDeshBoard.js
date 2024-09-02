import React, { useEffect, useState } from 'react';
import './AdminDeshboard.css'; 

const BookingData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
   
    fetch('http://localhost:5005/api/bookings')
      .then(response => {
        if (response.ok) {
          return response.json(); 
        } else {
         
          return response.text().then(text => {
            throw new Error(`HTTP error! status: ${response.status}, message: ${text}`);
          });
        }
      })
      .then(data => {
        setData(data); 
        setLoading(false); 
      })
      .catch(error => {
        setError(error); 
        setLoading(false); 
      });
  }, []); 

  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="booking-container">
      <h1>Booking Data</h1>
      <div className="booking-cards">
        {data.map((booking) => (
          <div className="card" key={booking._id}>
            <h2 className="card-title">{booking.roomType}</h2>
            <div className="card-content">
              <p><strong>Name:</strong> {booking.name}</p>
              <p><strong>Email:</strong> {booking.email}</p>
              <p><strong>Phone:</strong> {booking.phone}</p>
              <p><strong>Start Date:</strong> {new Date(booking.startDate).toLocaleDateString()}</p>
              <p><strong>End Date:</strong> {new Date(booking.endDate).toLocaleDateString()}</p>
              <p><strong>Address:</strong> {booking.address}</p>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingData;

