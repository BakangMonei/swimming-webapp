import React from "react";
import Sidebar from "../../components/sidebar/SideBar";
import Footer from "../../components/footer/Footer";
import RankingsTable from "../../components/tables/RankingsTable";
import SearchComponent from "../../components/search/SearchComponent";

const Rankings = () => {
  return (
    <div>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        <div className="flex flex-col flex-grow">
          {/* Records Header */}
          <h1 className="pr-10 font-mono  border-b-full text-gray-600 dark:text-gray-300 ml-4 text-7xl font-bold text-start">
            Rankings
          </h1>

          <SearchComponent />

          {/* Tables */}
          <div className="p-5">
            <RankingsTable />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Rankings;
