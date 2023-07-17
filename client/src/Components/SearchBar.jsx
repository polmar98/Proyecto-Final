import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchResults, searchPackagesAsync } from "../Redux/packagesSlice";
import { useNavigate } from "react-router-dom";

function SearchBar() {
   
  const [word, setWord] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const handleInputChange = (event) => {
    setWord(event.target.value);
  };

  const handleSearch = () => {
    dispatch(searchPackagesAsync(word))
        navigate("/search"); // Opcional: redirigir a la página de resultados de búsqueda
        setWord("")
      };
  

  
  return (
    <div className="flex bg-white w-[400px] h-[50px] rounded justify-between items-center">
      <input
        type="text"
        placeholder="A donde ..."
        className=" bg-white rounded p-2 m-2 w-[250px] focus:outline-none"
        value={word}
        onChange={handleInputChange}
      />
      <button className=" bg-green-300 rounded p-2 m-2"
      onClick={handleSearch}
      >Buscar</button>

<button className=" bg-green-300 rounded p-2 m-2"
      onClick={handleSearch}
      >Todos</button>
    </div>
  );
}

export default SearchBar;
