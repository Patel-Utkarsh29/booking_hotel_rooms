import React, { useState } from "react";
import { Link } from "react-router-dom";

const ResortHeader = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="flex justify-between items-center py-4 px-8 bg-black text-white shadow-md">
      <div className="text-4xl font-bold text-orange-600">
        visit <span className="text-white">Resort</span>
      </div>
      <nav className="hidden md:flex items-center gap-8 text-lg">
        <Link to="/homepage" className="hover:text-orange-600">
          Home
        </Link>
        <Link to="/rooms" className="hover:text-orange-600">
          Rooms
        </Link>
        <Link
          to="/"
          className="px-6 py-2 bg-blue-400 rounded-xl hover:bg-blue-500"
        >
          Login
        </Link>
      </nav>
      <button
        className="md:hidden text-3xl focus:outline-none"
        onClick={toggleSidebar}
        aria-label="Toggle menu"
      >
        ☰
      </button>
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-end">
          <div className="w-64 bg-white shadow-lg p-6">
            <button
              className="absolute top-4 right-4 text-2xl text-black focus:outline-none"
              onClick={toggleSidebar}
              aria-label="Close menu"
            >
              ✕
            </button>
            <nav className="flex flex-col gap-4 text-black text-xl">
              <Link
                to="/homepage"
                onClick={toggleSidebar}
                className="hover:text-orange-600"
              >
                Home
              </Link>
              <Link
                to="/rooms"
                onClick={toggleSidebar}
                className="hover:text-orange-600"
              >
                Rooms
              </Link>
              <Link
                to="/"
                onClick={toggleSidebar}
                className="bg-blue-400 px-4 py-2 rounded-lg text-white hover:bg-blue-500"
              >
                Login
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default ResortHeader;
