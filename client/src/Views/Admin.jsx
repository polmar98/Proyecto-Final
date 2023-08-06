import React from "react";

import NavBar from "../Components/NavBar";
import SideBarAdmin from "../Components/SideBarAdmin";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
function Admin() {
  return (
    <>
      <div className="relative bg-red-600 ">
        <NavBar />
        <div className="flex justify-start">
          <span className=" text-xl fonte flex text-gray-100 -my-1 fontPoppins ml-[10%]">
            <MdOutlineAdminPanelSettings className="mr-1" />
            Administrador
          </span>
        </div>
      </div>
      <div>
        <SideBarAdmin />
      </div>
    </>
  );
}
export default Admin;
