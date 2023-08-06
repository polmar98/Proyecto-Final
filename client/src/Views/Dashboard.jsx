import React from "react";
import NavBar from "../Components/NavBar";
import SideBarAdmin from "../Components/SideBarAdmin";
import DashboardAdmin from "../Components/DashboardAdmin";

function Dashboard() {
    return (
      <>
        <div className="relative bg-verdeFooter">
          <NavBar />
        </div>
        <div className="flex max-h-screen overflow-auto">
          <SideBarAdmin />
          <DashboardAdmin />
        </div>
      </>
    );
  }
  
  export default Dashboard