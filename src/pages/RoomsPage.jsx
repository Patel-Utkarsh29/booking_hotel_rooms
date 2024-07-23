import React from "react";
import ResortHeader from "../components/ResortHeader";
import ContactSection from "../components/ContactSection";
import RoomsHeroSection from "../components/RoomsHeroSection";
import RoomGrid from "../components/RoomGrid";

const RoomsPage = () => {
  return (
    <div className="flex flex-col justify-center font-semibold text-center bg-white">
      <ResortHeader />
      <RoomsHeroSection />
      <RoomGrid />
      <ContactSection />
    </div>
  );
};

export default RoomsPage;
