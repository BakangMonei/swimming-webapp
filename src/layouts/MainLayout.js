import React from "react";
import Sidebar from "../components/sidebar/SideBar";
import TopTimes from "../components/searchbox/TopTimes";

const MainLayout = () => {
  return (
    <div>

        {/* Sidebar component and Header */}
      <div className="flex flex-row">
        <div>
          <Sidebar />
        </div>
        <div className="">
          <h1 className=" p-10 text-3xl text-blue-700 font-mono text-">Rankings</h1>
        </div>
      </div>
      {/********************************************************/}

      <div className="">
      <TopTimes/>
      </div>
    </div>
  );
};

export default MainLayout;
