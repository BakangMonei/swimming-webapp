import React, { useState, useEffect } from 'react';
import { FaRegClock, FaRegCalendarAlt, FaHeart, FaEnvelope } from 'react-icons/fa'; // Importing icons from react-icons library

const Footer = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-black py-6 px-4 flex flex-col items-center justify-center text-white border-t-2">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <FaRegCalendarAlt className="text-gray-400" />
          <span>{dateTime.toLocaleDateString()}</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaRegClock className="text-gray-400" />
          <span>{dateTime.toLocaleTimeString()}</span>
        </div>
      </div>
      <div className="text-gray-400 my-2">
        &copy; {new Date().getFullYear()} Dignity Rangaka
      </div>
      <div className="flex items-center space-x-4">
        <FaHeart className="text-red-500 cursor-pointer hover:text-red-600" />
        <FaEnvelope className="text-blue-500 cursor-pointer hover:text-blue-600" />
        {/* Add more icons here */}
      </div>
    </footer>
  );
};

export default Footer;
