import React from "react";

import NavBar from "../Components/NavBar";
import SidebarAdmin from "../Components/SideBarAdmin";

function admin(){
  return(
    <div>
      <div className="relative bg-verdeFooter">
        <NavBar />
      </div>
      <div className="flex max-h-screen overflow-auto">
        <SidebarAdmin />

      </div>
    </div>
  )
}
export default admin;