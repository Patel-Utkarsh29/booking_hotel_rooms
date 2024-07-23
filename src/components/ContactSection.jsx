import React from "react";

const ContactSection = () => {
  return (
    <div className="flex justify-center items-center py-16 bg-gray-800 text-white">
      <div className="max-w-7xl w-full px-8">
        <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center text-xl">
            <p className="mb-4 md:mb-0 md:mr-8">Phone: +91 99999 99999</p>
            <p className="mb-4 md:mb-0 md:mr-8">Email: abc@gmail.com</p>
            <p className="mb-4 md:mb-0 md:mr-8">Instagram: abc_29</p>
            <p className="mb-4 md:mb-0">Facebook: abc_29</p>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-xl text-lg">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

