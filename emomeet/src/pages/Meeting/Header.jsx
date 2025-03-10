import React, { useState, useEffect } from 'react';
import { IoLink } from "react-icons/io5";
const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date()); // Update time every second
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="flex items-center justify-between p-0 bg-gray-100 border border-gray-500 pe-[1rem]">
      <div className='border-r-1 border-gray-500 p-3 flex justify-center'>
        <img src="/assets/logo.png" alt="logo" className="size-15" />
      </div>
      <div className='flex-1 flex items-center justify-between px-[1rem]'>
        <div>
          <p>[Internal] Weekly Report Marketing + Sales</p>
          <p>
            {currentTime.toLocaleString("en-US", { month: "short" })}{" "}
            {currentTime.getDate()}, {currentTime.getFullYear()} |{" "}
            {currentTime.toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              hour12: true,
            })}
          </p>
        </div>
        <div className='flex gap-3'>
          <div className='flex items-center gap-4 border-2 border-lightblue px-[1.5rem] py-[0.5rem] rounded-full p-3'>
            <IoLink className='size-6 text-lightblue' />
            <p className='text-lightblue'>cem-jnmt-hsu</p>
          </div>
          <div className='flex gap-3 items-center border border-gray-600 px-[2rem] py-[0.3rem] rounded-full'>
            <div className='size-10 rounded-full '>
              <img src="/images/user/user-01.jpg" alt="Profile" className='rounded-full' />
            </div>
            <div>
              <p className='text-lg font-semibold'>Nithwin</p>
              <p className='text-sm'>Moderator</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Header;
