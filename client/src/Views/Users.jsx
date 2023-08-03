import React from "react";
import NavBar from "../Components/NavBar";
import SideBarAdmin from "../Components/SideBarAdmin";
import UserList from "../Components/UserList";
function Users() {
  return (
    <>
      <div className="relative bg-verdeFooter">
        <NavBar />
      </div>
      <div className="flex max-h-screen overflow-auto">
        <SideBarAdmin />
        <UserList />
      </div>
    </>
  );
}

export default Users;
