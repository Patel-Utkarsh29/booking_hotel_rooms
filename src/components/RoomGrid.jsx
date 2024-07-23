import React, { useState, useEffect } from "react";
import RoomCard from "./RoomCard";

const RoomGrid = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("/roomsData.json")
      .then((response) => response.json())
      .then((data) => setRooms(data));
  }, []);

  return (
    <section className="px-5 mt-12 mb-12 w-full max-w-[1340px] max-md:mt-10 max-md:max-w-full mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </section>
  );
};

export default RoomGrid;

