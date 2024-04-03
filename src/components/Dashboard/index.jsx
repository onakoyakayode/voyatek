import React from "react";
import Aside from "./Aside";
import MainContent from "./MainContent";

const Dashboard = () => {
  return (
    <div className="flex justify-normal items-start w-full h-screen overflow-y-scroll p-10 gap-16 relative">
      <Aside />
      <div className="overflow-y-scroll w-[75%]">
        <MainContent />
      </div>
    </div>
  );
};

export default Dashboard;
