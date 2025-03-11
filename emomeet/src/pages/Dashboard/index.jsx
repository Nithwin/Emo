import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
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

        {/* Render nested routes */}
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;