import React from "react";

function SearchBar() {
  return (
    <div className="flex bg-white w-[400px] rounded justify-between items-center">
      <input
        type="text"
        placeholder="City or Destination"
        className=" bg-white rounded p-4 m-2"
      />
      <button className=" bg-green-300 rounded p-4 m-2">Find Trip Now</button>
    </div>
  );
}

export default SearchBar;
