import React from "react";
import NavBar from "../Components/NavBar";
import SearchBar from "../Components/SearchBar";
import ContFilter from "../Components/ContFilter";

function Home() {
  return (
    <div className=" bg-local h-screen bg-img portada">
      <div>
        <NavBar />
      </div>
      <div className="items-center flex justify-center mt-56">
        <SearchBar />
      </div>
      <div className=" mt-[450px] items-center flex justify-center">
        <ContFilter />
      </div>
    </div>
  );
}

export default Home;
