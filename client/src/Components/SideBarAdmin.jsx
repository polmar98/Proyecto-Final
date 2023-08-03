import React from "react";
import { Link } from "react-router-dom";
import {
  BsHouseDoor,
  BsBox,
  BsGraphUp,
  BsCardChecklist,
  BsPerson,
  BsBoxArrowInRight,
} from "react-icons/bs";

function SidebarAdmin() {
  return (
    <div className="flex flex-col justify-between w-64 min-h-screen bg-white text-black px-6 py-4 rounded-lg shadow-lg overflow-auto">
      <ul>
        <li className="mb-6 flex items-center">
          <BsHouseDoor className="mr-4" />
          <Link to="/home">Home</Link>
        </li>
        <li className="mb-6 flex items-center">
          <BsBox className="mr-4" />
          <Link to="/admin/users">Users</Link>
        </li>
        <li className="mb-6 flex items-center">
          <BsGraphUp className="mr-4" />
          <Link to="/admin/packages">Packages</Link>
        </li>
        <li className="mb-6 flex items-center">
          <BsCardChecklist className="mr-4" />
          <Link to="/formPackages">Create Packages</Link>
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
