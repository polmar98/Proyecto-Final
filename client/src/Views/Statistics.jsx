import React from "react";
import NavBar from "../Components/NavBar";
import SideBarAdmin from "../Components/SideBarAdmin";
import StatisticsPackage from "../Components/StatiscsPackage";

function Statistics() {
  return (
    <>
      <div className="relative bg-verdeFooter">
        <NavBar />
      </div>
      <div className="flex max-h-screen overflow-auto">
        <SideBarAdmin />
        <StatisticsPackage />
      </div>
    </>
  );
}

export default Statistics;