import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchPackages } from "../Redux/packagesSlice";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [pais, setPais] = useState("");

  const handleSearch = () => {
    //dispatch(searchPackages(pais))
    navigate("/search");
  };

  const handleInputChange = (e) => {
    setPais(e.target.value);
  };

  return (
    <div className="flex bg-white w-[400px] h-[50px] rounded justify-between items-center">
      <input
        type="text"
        placeholder="Country or Destination"
        className=" bg-white rounded p-2 m-2 w-[250px] focus:outline-none"
        value={pais}
        onChange={handleInputChange}
      />
      <button className=" bg-green-300 rounded p-2 m-2" onClick={handleSearch}>
        Find Trip Now
      </button>
    </div>
  );
}

export default SearchBar;
