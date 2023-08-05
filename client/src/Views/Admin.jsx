import React from "react";

import NavBar from "../Components/NavBar";
import Sidebar from "../Components/SideBar";

function admin(){
  return(
    <div>
      <div>
        <NavBar/>
      </div>
      <div>
        <Sidebar/>

      </div>
    </div>
  )
}
export default admin;