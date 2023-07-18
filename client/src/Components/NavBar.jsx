import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="flex flex-row p-5">
      <div className="mt-0 items-center basis-1/4 logo"> </div>

      <div className="basis-1/2">
        <ul className="flex flex-row justify-center">
          <li className="p-2 mr-5 ml-5 tracking-wider flex-none transition duration-200 hover:scale-110">
            <Link
              className="text-m text-white fontPoppins hover:fontPoppinsB font-bold"
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="p-2 mr-5 ml-5 tracking-wider flex-none transition duration-200 hover:scale-110">
            <Link
              className="text-m text-white fontPoppins hover:fontPoppinsB font-bold"
              to="/search"
            >
              Discover
            </Link>
          </li>
          <li className="p-2 mr-5 ml-5 tracking-wider flex-none transition duration-200 hover:scale-110">
            <Link
              className="text-m text-white fontPoppins hover:fontPoppinsB font-bold"
              to="/about"
            >
              About
            </Link>
          </li>
          <li className="p-2 mr-5 ml-5 tracking-wider flex-none transition duration-200 hover:scale-110">
            <Link
              className="text-m text-white fontPoppins hover:fontPoppinsB font-bold cursor-not-allowed"
              // to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="basis-1/4">
        <ul className="flex flex-row justify-end">
          <li className="p-2 mr-5 tracking-wider flex-none transition duration-200 hover:scale-110">
            <Link
              className="text-m text-white fontPoppins hover:fontPoppinsB font-bold"
              to="/login"
            >
              Log In
            </Link>
          </li>
          <li className="p-2 mr-5 ml-5 tracking-wider flex-none transition duration-200 hover:scale-110">
            <Link
              className="text-m text-black fontPoppins hover:fontPoppinsB rounded bg-white p-1 mt-1 "
              to="/login"
              style={{
                padding: "10px 24px",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "8px",
                background: "var(--neutrals, #FFF)",
              }}
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
