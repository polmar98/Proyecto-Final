import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchResults, searchPackagesAsync } from "../Redux/packagesSlice";
import { useNavigate } from "react-router-dom";
import logo from "../Utils/Img/logo.png";
import { FaSearch } from "react-icons/fa"
import { useLocation } from "react-router-dom"

function SearchBar() {
   
  const [word, setWord] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  
  const handleInputChange = (event) => {
    setWord(event.target.value);
  };

  const handleSearch = () => {
    dispatch(searchPackagesAsync(word))
      .then((filteredPackages) => {
        dispatch(setSearchResults(filteredPackages));
        navigate(`/search?title=${encodeURIComponent(word)}`);
        setWord ("")
      });
  }
  
  const isSearchResult = location.pathname === "/search"

  
  return (
    <div className="flex bg-white w-[400px] h-[50px] rounded justify-between items-center">

{isSearchResult && (
  <img src={logo} alt="logo" className="w-1/2 h-auto ml-5 mr-20"/>)}
          

      <div className="flex-grow">
      <input
        type="text"
        placeholder="A donde ..."
        className=" bg-white rounded p-2 m-2 text-lg w-[250px] focus:outline-none"
        value={word}
        onChange={handleInputChange}
      />
      </div>
      <div>
      <button className=" bg-green-300 rounded p-2 m-2" onClick={handleSearch} >
      <FaSearch style={{ fontSize: "20px", color: "white" }} />
      </button>
      </div>
      

    </div>
  );
}


export default SearchBar;
