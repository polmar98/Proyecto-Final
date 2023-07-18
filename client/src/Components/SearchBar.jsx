import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchResults, searchPackagesAsync } from "../Redux/packagesSlice";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

function SearchBar() {
  const [word, setWord] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setWord(event.target.value);
  };

  const handleSearch = () => {
    dispatch(searchPackagesAsync(word)).then((filteredPackages) => {
      dispatch(setSearchResults(filteredPackages));
      navigate(`/search?title=${encodeURIComponent(word)}`);
      setWord("");
    });
  };

  return (
    <div className="flex bg-white w-[400px] h-[50px] rounded justify-between items-center shadow-md">
      <div className="flex items-center">
        <IoLocationSharp
          style={{ fontSize: "20px", marginLeft: "10px", marginRight: "5px" }}
        />
        <input
          type="text"
          placeholder="A donde ..."
          className="bg-white rounded p-2 m-2 w-[250px] focus:outline-none"
          value={word}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <button className="bg-green-400 rounded p-2 m-2" onClick={handleSearch}>
          <FaSearch style={{ fontSize: "20px", color: "white" }} />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
