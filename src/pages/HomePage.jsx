import React from "react";
import ResortHeader from "../components/ResortHeader";
import HeroSection from "../components/HeroSection";
import ContactSection from "../components/ContactSection";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center font-semibold text-center bg-white">
      <ResortHeader />
      <HeroSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
