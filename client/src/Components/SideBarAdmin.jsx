import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { LuPackageSearch } from "react-icons/lu";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { BsHouseDoor, BsBoxArrowInRight } from "react-icons/bs";

function SidebarAdmin() {
  return (
    <div className="flex flex-col justify-between w-64 min-h-screen bg-gray-100 text-black px-6 py-4 rounded-lg shadow-lg overflow-auto">
      <ul>
        <li className="mb-6 flex items-center">
          <BsHouseDoor className="mr-4" />
          <Link to="/home">Home</Link>
        </li>
        <li className="mb-6 flex items-center">
          <AiOutlineUser className="mr-4" />
          <Link to="/admin/users">Users</Link>
        </li>
        <li className="mb-6 flex items-center">
          <LuPackageSearch className="mr-4" />
          <Link to="/admin/packages">Packages</Link>
        </li>
        <li className="mb-6 flex items-center">
          <MdOutlineCreateNewFolder className="mr-4" />
          <Link to="/formPackages">Create Packages</Link>
        </li>
        <li className="mb-6 flex items-center">
          <BsGraphUp className="mr-4" />
          <Link to="/admin/statistics">Statistics</Link>
        </li>
      </ul>
      <ul>
        <li className="mb-6 flex items-center">
          <BsBoxArrowInRight className="mr-4" />
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </div>
  );
}

export default SidebarAdmin;
