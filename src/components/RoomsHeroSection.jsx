import React from "react";
import { useNavigate } from "react-router-dom";

const RoomsHeroSection = () => {
  const navigate = useNavigate();
  return (
    <div
      className="relative flex flex-col justify-center items-center h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('/images/home_room.png')",
      }}
    >
      <div className="bg-black bg-opacity-50 p-10 rounded-lg text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-4">Our Rooms</h1>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-4 px-8 rounded-xl text-lg"
          onClick={() => navigate("/")}
        >
          Return Home
        </button>
      </div>
    </div>
  );
};

export default RoomsHeroSection;
