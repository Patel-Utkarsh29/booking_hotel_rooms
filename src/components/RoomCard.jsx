import React from "react";
import { useNavigate } from "react-router-dom";

const RoomCard = ({ room }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/rooms/${room.id}`);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        loading="lazy"
        src={room.imageSrc}
        alt={room.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{room.title}</h3>
        <p className="text-gray-700 mb-4">Rs. {room.price} /- per night</p>
        <button
          onClick={handleClick}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default RoomCard;
