import React from "react";
import Sidebar from "../../components/sidebar/SideBar";
import TopTimes from "../../components/searchbox/TopTimes";
import RecordsTable from "../../components/tables/RecordsTable";
import Tables from "../../components/tables/Tables";

const Records = () => {
  return (
    <div className="flex">
    {/* Sidebar */}
    <Sidebar />
  
    <div className="flex flex-col flex-grow">
      {/* Records Header */}
      <h1 className="pr-10 text-8xl text-blue-700 font-mono text-center border-b-full">
        Records
      </h1>
  
      {/* Tables */}
      <Tables />
    </div>
  </div>
  
  );
};

export default Records;
