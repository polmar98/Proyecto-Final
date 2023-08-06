import React from "react";
import { Link } from "react-router-dom";
import {
  BsHouseDoor,
  BsBox,
  BsGraphUp,
  BsCardChecklist,
  BsPerson,
  BsBoxArrowInRight,
  BsGeoAlt,
} from "react-icons/bs";

function SidebarAdmin() {

  const location = useLocation();
  
  const isActiveLink = (path) => {
    return location.pathname === path;
  };
  return (
    <div className="flex flex-col justify-between w-64 min-h-screen bg-white text-black px-6 py-4 rounded-lg shadow-lg overflow-auto">
      <ul>
        <li className={`mb-6 flex items-center ${isActiveLink("/home") ? "bg-gray-200 text-black" : ""}`}>
          <BsHouseDoor className="mr-4" />
          <Link to="/home">Home</Link>
        </li>
        <li className="mb-6 flex items-center">
          <BsBox className="mr-4" />
          <Link to="/admin/users">Users</Link>
        </li>
        <li className="mb-6 flex items-center">
          <BsGeoAlt className="mr-4" />
          <Link to="/admin/packages">Packages</Link>
        </li>
        <li className="mb-6 flex items-center">
          <BsCardChecklist className="mr-4" />
          <Link to="/formPackages">Create Packages</Link>
        </li>
        <li className={`mb-6 flex items-center ${isActiveLink("/admin/statistics") ? "bg-gray-200 text-black" : ""}`}>
          <BsGraphUp className="mr-4" />
          <Link to="/admin/statistics">Statistics</Link>
        </li>
      </ul>
      <ul>
        <li className={`mb-6 flex items-center ${isActiveLink("/logout") ? "bg-gray-200 text-black" : ""}`}>
          <BsBoxArrowInRight className="mr-4" />
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </div>
  );
}

export default SidebarAdmin;
