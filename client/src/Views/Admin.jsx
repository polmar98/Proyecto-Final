import React from "react";
import NavBar from "../Components/NavBar";
import SidebarAdmin from "../Components/SideBarAdmin";

function admin(){
  return(
    <div>
      <div className="bg-verdeFooter">
        <NavBar/>
      </div>
      <div className="mt-50">
        <SidebarAdmin className="mt-50"/>

      </div>
    </div>
  )
}
export default admin;