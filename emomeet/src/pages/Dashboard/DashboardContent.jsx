import React from "react";
import DemographicCard from "../../components/ecommerce/DemographicCard";
import MonthlyAttendanceChart from "../../components/ecommerce/MonthlyAttendanceChart";
import MonthlyTarget from "../../components/ecommerce/MonthlyTarget";
import StatisticsChart from "../../components/ecommerce/StatisticsChart";
import CountUp from 'react-countup';

const DashboardContent = () => {
  return (
    <div className="grid grid-cols-3 gap-6 mt-[2rem]">
      <div className="shadow-box rounded-4xl flex flex-wrap justify-center items-center h-fit">
        <div className="px-5 pt-5 bg-white shadow-default rounded-2xl pb-11 sm:px-6 sm:pt-6 min-h-[22rem] min-w-full flex flex-col">
          <div className="flex justify-between flex-col">
            <div>
              <h1 className="text-2xl font-semibold text-gray-800">
                Total Meetings
              </h1>
            </div>
          </div>
          <div className="relative flex justify-center items-center flex-1">
            <CountUp end={200} className="text-8xl font-semibold" />
          </div>
        </div>
      </div>
      <div className="shadow-box rounded-4xl flex flex-wrap justify-center items-center h-fit">
        <MonthlyTarget value={75} name={"Engaged"} color={"#00ff68"} content={"300 students are engaged today, it's higher than last month. Keep up your good work!"} />
      </div>
      <div className="shadow-box rounded-4xl flex flex-wrap justify-center items-center h-fit">
        <MonthlyTarget value={5} name={"Bored"} color={"#fe5e14"} content={"120 students felt bored today. Consider adding interactive elements to keep them engaged"} />
      </div>
      <div className="shadow-box rounded-4xl flex flex-wrap justify-center items-center h-fit">
        <div className="px-5 pt-5 bg-white shadow-default rounded-2xl pb-11 sm:px-6 sm:pt-6 min-h-[22rem] min-w-full flex flex-col">
          <div className="flex justify-between flex-col">
            <div>
              <h1 className="text-2xl font-semibold text-gray-800">
                Total Participants
              </h1>
            </div>
          </div>
          <div className="relative flex justify-center items-center flex-1">
            <CountUp end={2000} className="text-8xl font-semibold" />
          </div>
        </div>
      </div>
      <div className="shadow-box rounded-4xl flex flex-wrap justify-center items-center h-fit">
        <MonthlyTarget value={5} name={"Frustrated"} color={"#ffec00"} content={"80 students experienced frustration today. Addressing concerns can enhance the learning"} />
      </div>
      <div className="shadow-box rounded-4xl flex flex-wrap justify-center items-center h-fit">
        <MonthlyTarget value={15} name={"Neutral"} color={"#0083ff"} content={"200 students had a neutral response today. A small push could make learning more engaging!"} />
      </div>
      <div className="lg:col-span-2 lg:row-span-2 shadow-box rounded-4xl">
        <MonthlyAttendanceChart className="h-full" />
      </div>
      <div className="lg:col-span-1 lg:row-span-2 shadow-box rounded-4xl h-fit">
        <DemographicCard />
      </div>
      <div className="lg:col-span-3 lg:row-span-2 shadow-box rounded-4xl h-fit">
        <StatisticsChart className="h-full w-full" />
      </div>
    </div>
  );
};

export default DashboardContent;