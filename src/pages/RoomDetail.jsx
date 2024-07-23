import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ResortHeader from "../components/ResortHeader";
import ContactSection from "../components/ContactSection";

const RoomDetail = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [formData, setFormData] = useState({
    roomType: '',
    name: '',
    email: '',
    phone: '',
    startDate: '',
    endDate: '',
    address: ''
  });

  useEffect(() => {
    fetch("/roomsData.json")
      .then((response) => response.json())
      .then((data) => {
        const room = data.find((room) => room.id.toString() === id);
        setRoom(room);
        setFormData({ ...formData, roomType: room.title });
      });
  }, [id]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting booking data:', formData);  // Logging formData before sending
    fetch('http://localhost:5005/api/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        return response.text().then(text => { throw new Error(text) });
      }
      return response.json();
    })
    .then(data => {
      console.log('Booking successful:', data);
      alert('Booking successful!');
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Booking failed: ' + error.message);
    });
  };

  if (!room) return <div>Loading...</div>;

  return (
    <div>
      <ResortHeader />
      <div className="container mx-auto p-5">
        <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-8">
          <div className="w-full md:w-1/2">
            <img
              src={room.imageSrc}
              alt={room.title}
              className="w-full h-auto rounded-lg mb-5 object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-semibold mb-5">{room.title}</h2>
            <ul className="list-disc pl-5 mb-5 space-y-2">
              {Object.entries(room.details).map(([key, value]) => (
                <li key={key} className="text-lg">
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
            <form
              onSubmit={handleSubmit}
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  type="text"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="startDate"
                >
                  Starting Date
                </label>
                <input
                  id="startDate"
                  type="date"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="endDate"
                >
                  End Date
                </label>
                <input
                  id="endDate"
                  type="date"
                  value={formData.endDate}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  id="address"
                  type="text"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Your Address"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Book
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ContactSection />
    </div>
  );
};

export default RoomDetail;
