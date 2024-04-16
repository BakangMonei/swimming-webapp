import React from "react";
import Sidebar from "../../components/sidebar/SideBar";
import Footer from "../../components/footer/Footer";
import RecordsTable from "../../components/tables/RecordsTable";

const Records = () => {
  return (
    <div>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        <div className="flex flex-col flex-grow">
          {/* Records Header */}
          <h1 className="pr-10 font-mono  border-b-full text-gray-600 dark:text-gray-300 ml-4 text-7xl font-bold text-start">
            Records
          </h1>

          {/* Tables */}
          <div className="p-5">
            <RecordsTable />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Records;
