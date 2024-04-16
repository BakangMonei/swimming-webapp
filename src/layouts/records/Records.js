import React from "react";
import Sidebar from "../../components/sidebar/SideBar";
import TopTimes from "../../components/searchbox/TopTimes";
import RecordsTable from "../../components/tables/RecordsTable";

const Records = () => {
  return (
    <div className="flex">
    {/* Sidebar component */}
    <div>
      <Sidebar />
    </div>
  
    {/* Record Header & Table Record component */}
    <div className="p-10">
      <h1 className="pr-10 text-8xl text-blue-700 font-mono text-center border-b-1 border-b-green-500">
        Records
      </h1>
      <RecordsTable />
    </div>
  </div>
  
  );
};

export default Records;
