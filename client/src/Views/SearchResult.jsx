import React from "react";
import SearchBar from "../Components/SearchBar";
import { useSelector } from "react-redux";
import Card from "../Components/CardPackageSearch";

export default function SearchResult (){

    const searchResult = useSelector((state)=>state.packages.searchResults)
    const packagesList = useSelector((state) => state.packages.packagesList);


    return(
        <div>
        <SearchBar />
  
        {searchResult.length > 0 ? (
          searchResult.map(tour => <Card key={tour.Id} {...tour} />)
        ) : (
          packagesList.map(tour => <Card key={tour.Id} {...tour} />)
        )}
      </div>
    );
  }