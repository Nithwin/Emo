import React from "react";
import Header from "../../components/header/Header";
import DemographicCard from "../../components/ecommerce/DemographicCard";
import MonthlySalesChart from "../../components/ecommerce/MonthlySalesChart";
import MonthlyTarget from "../../components/ecommerce/MonthlyTarget";
import StatisticsChart from "../../components/ecommerce/StatisticsChart";
import Sidebar from "./Sidebar"; // Import Sidebar

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 ml-64">
        {/* Header */}
        <Header />

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-3 gap-6 mt-[2rem]">
          <div className="shadow-box rounded-4xl flex flex-wrap justify-center items-center h-fit">
            <MonthlyTarget value={75} name={"Engaged"} color={"#00ff68"} content={"300 students are engaged today, it's higher than last month. Keep up your good work!"} />
          </div>
          <div className="shadow-box rounded-4xl flex flex-wrap justify-center items-center h-fit">
            <MonthlyTarget value={5} name={"Bored"} color={"#fe5e14"} content={"120 students felt bored today. Consider adding interactive elements to keep them engaged"} />
          </div>
          <div className="shadow-box rounded-4xl flex flex-wrap justify-center items-center h-fit">
            <MonthlyTarget value={5} name={"Frustrated"} color={"#ffec00"} content={"80 students experienced frustration today. Addressing concerns can enhance the learning"} />
          </div>
          <div className="shadow-box rounded-4xl flex flex-wrap justify-center items-center h-fit">
            <MonthlyTarget value={15} name={"Neutral"} color={"#0083ff"} content={"200 students had a neutral response today. A small push could make learning more engaging for them!"} />
          </div>
          <div className="lg:col-span-2 lg:row-span-1 shadow-box rounded-4xl">
            <MonthlySalesChart className="h-full" />
          </div>
          <div className="lg:col-span-2 lg:row-span-2 shadow-box rounded-4xl h-fit">
            <StatisticsChart className="h-full w-full" />
          </div>
          <div className="lg:col-span-1 lg:row-span-2 shadow-box rounded-4xl h-fit">
            <DemographicCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
