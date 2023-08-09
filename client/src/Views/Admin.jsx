import React, { useEffect } from "react";

import NavBar from "../Components/NavBar";
import SideBarAdmin from "../Components/SideBarAdmin";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();
  const admin = useSelector((state) => state.admin.admin);

  useEffect(() => {
    if (admin !== 2) {
      navigate("/home");
      window.alert("que onda guacho donde queres entrar?");
    }
  }, []);

  return (
    <>
      {admin === 2 ? (
        <>
          <div className="relative bg-red-600 ">
            <NavBar />
          </div>
          <div>
            <SideBarAdmin />
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
export default Admin;
