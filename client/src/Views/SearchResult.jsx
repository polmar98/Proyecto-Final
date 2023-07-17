import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import SearchBar from "../Components/SearchBar";
import Card from "../Components/CardPackageSearch";
import { useDispatch } from "react-redux";
import {fetchPackages} from "../Redux/packagesSlice"


export default function SearchResult() {

  const dispatch = useDispatch()


  useEffect(()=>{
    dispatch(fetchPackages())
  },[dispatch])

  // useEffect (()=>{
  //   dispatch(fetchCities())
  // },[dispatch])


    
  const searchResults = useSelector((state) => state.search.searchResults);
  const packagesList = useSelector((state) => state.packages.packagesList);
  

  return (
    <div>
      <SearchBar />

      {searchResults.length > 0 ? (
        searchResults.map((tour) => <Card key={tour.id} {...tour} />)
      ) : (
        packagesList.map((tour) => <Card key={tour.id} {...tour} />)
      )}
    </div>
  );
}