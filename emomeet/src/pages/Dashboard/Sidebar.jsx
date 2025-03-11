import React from "react";
import { Link } from "react-router-dom";
import { FaTachometerAlt, FaHistory, FaSignOutAlt, FaCalendarAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="fixed top-2 left-2 bottom-2 w-64 h- vh bg-darkblue shadow-lg p-4 flex flex-col justify-between rounded-2xl py-[2rem]">
      <div className="w-full flex flex-col">
        <div className="mb-8">
          <p className="text-2xl font-bold text-center text-white">Emo Dashboard</p>
        </div>
        <ul className="flex flex-col gap-5">
          <li className="mb-4 flex items-center justify-center bg-white text-lightblue hover:text-white hover:bg-lightblue transition-all delay-100 ease-in-out cursor-pointer py-[1rem] px-[2rem] rounded-full">
            <FaTachometerAlt className="mr-2 size-5" />
            <Link to="/dashboard" className="text-lg font-semibold">Dashboard</Link>
          </li>
          <li className="mb-4 flex items-center justify-center bg-white text-lightblue hover:text-white hover:bg-lightblue transition-all delay-100 ease-in-out cursor-pointer py-[1rem] px-[2rem] rounded-full">
            <FaCalendarAlt className="mr-2 size-5" />
            <Link to="/dashboard/profile" className="text-lg font-semibold">Profile</Link>
          </li>
          <li className="mb-4 flex items-center justify-center bg-white text-lightblue hover:text-white hover:bg-lightblue transition-all delay-100 ease-in-out cursor-pointer py-[1rem] px-[2rem] rounded-full">
            <FaHistory className="mr-2 size-5" />
            <Link to="/dashboard/history" className="text-lg font-semibold">History</Link>
          </li>
        </ul>
      </div>
      <ul>
        <li className="mb-4 flex items-center hover:bg-red-500 hover:text-white text-lightblue cursor-pointer bg-white px-[2rem] py-[1rem] rounded-full justify-center">
          <FaSignOutAlt className="mr-2 size-5" />
          <Link to="/signin" className="text-lg font-semibold">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;