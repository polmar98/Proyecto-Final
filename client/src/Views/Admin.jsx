import React from "react";
import NavBar from "../Components/NavBar";
import SideBarAdmin from "../Components/SideBarAdmin";

function Admin() {
  return (
    <>
      <div className="relative bg-verdeFooter">
        <NavBar />
      </div>
      <div className="flex max-h-screen overflow-auto">
        <SideBarAdmin />
      </div>
    </>
  );
}

export default Admin;
