import React from "react";
import { Link } from "react-router-dom";
import { FaSwimmer, FaTrophy } from "react-icons/fa"; // Importing icons from react-icons library
import SideBarFooter from "../footer/SideBarFooter";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-1/5 h-screen bg-gray-800">
      <div className="flex items-center justify-center h-16 bg-gray-900">
        <h1 className="text-white font-extrabold text-xl">Swimming WebApp</h1>
      </div>
      <div className="flex flex-col items-center justify-center flex-1">
        <ul className="flex flex-col items-center justify-center w-full">
          <li className="w-full py-2 hover:bg-gray-700">
            <Link
              to="/"
              className="text-white flex items-center space-x-2 font-extrabold"
            >
              <FaSwimmer /> {/* Using the swimming icon */}
              Records
            </Link>
          </li>
          <li className="w-full py-2 hover:bg-gray-700">
            <Link
              to="/leaderboard"
              className="text-white flex items-center space-x-2 font-extrabold"
            >
              <FaTrophy /> {/* Using the trophy icon */}
              Rankings
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center h-16 bg-gray-900">
        <SideBarFooter />
      </div>
    </div>
  );
};

export default Sidebar;
