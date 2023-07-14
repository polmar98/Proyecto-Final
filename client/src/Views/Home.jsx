import React from "react";
import NavBar from "../Components/NavBar";
import SearchBar from "../Components/SearchBar";

function Home() {
  return (
    <div className=" h-screen bg-img portada">
      <div>
        <NavBar />
      </div>
      <div className="items-center flex justify-center mt-56">
        <SearchBar />
      </div>
    </div>
  );
}

export default Home;
