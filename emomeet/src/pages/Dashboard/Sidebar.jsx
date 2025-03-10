import React from "react";
import { Link } from "react-router-dom";
import { FaTachometerAlt, FaHistory, FaSignOutAlt, FaCalendarAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 bottom-0 w-64 h-dvh bg-lightblue shadow-lg p-4 flex flex-col justify-between">
      <div className="b">
        <div className="flex items-center justify-between mb-8">
          <p className="text-2xl font-bold text-center text-white">Emo Dashboard</p>
        </div>
        <ul className="flex flex-col gap-5">
          <li className="mb-4 flex items-center bg-white text-black hover:text-blue-500 cursor-pointer py-[1rem] px-[2rem] rounded-full">
            <FaTachometerAlt className="mr-2 size-5" />
            <Link to="/dashboard" className="text-xl font-semibold">Dashboard</Link>
          </li>
          <li className="mb-4 flex items-center bg-white text-lightblue hover:text-blue-500 cursor-pointer py-[1rem] px-[2rem] rounded-full">
            <FaCalendarAlt className="mr-2  size-5" />
            <Link to="/upcoming-meetings"  className="text-xl font-semibold">Upcoming</Link>
          </li>
          <li className="mb-4 flex items-center bg-white text-lightblue hover:text-blue-500 cursor-pointer py-[1rem] px-[2rem] rounded-full">
            <FaHistory className="mr-2  size-5" />
            <Link to="/history"  className="text-xl font-semibold">History</Link>
          </li>
        </ul>
      </div>
      <ul>
        <li className="mb-4 flex items-center hover:bg-red-500 hover:text-white text-lightblue cursor-pointer bg-white px-[2rem] py-[1rem] rounded-full justify-center">
          <FaSignOutAlt className="mr-2 t size-5" />
          <Link to="/logout" className=" text-xl font-semibold">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
