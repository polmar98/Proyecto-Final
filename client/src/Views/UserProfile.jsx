import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/authContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import NavBar from "../Components/NavBar";
import Sidebar from "../Components/SideBar";
import UserDate from "../Components/Userprofile/UserDetail";

const UserProfile = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogoutClick = (event) => {
    event.preventDefault();
    logout();
    console.log("logout");
  };

  return (
    <div className="overflow-hidden">
      <div className="relative bg-verdeFooter">
        <NavBar />
      </div>

      <div className="flex max-h-screen overflow-auto">
        <Sidebar />
        <UserDate />
      </div>
    </div>
  );
};

export default UserProfile;
