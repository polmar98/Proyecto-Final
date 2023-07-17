import React from "react";
import NavBar from "../Components/NavBar";
import SearchBar from "../Components/SearchBar";
import ContFilter from "../Components/ContFilter";
import Footer from "../Components/Footer";
import { fetchPackages, selectPackages } from "../Redux/packagesSlice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  const packages = useSelector(selectPackages);
  console.log(packages);

  useEffect(() => {
    dispatch(fetchPackages());
  }, [dispatch]);

  return (
    <>
      <div className=" bg-local h-screen bg-img portada">
        <div>
          <NavBar />
        </div>
        <div className="items-center flex justify-center mt-56">
          <SearchBar />
        </div>
      </div>

      <div className=" mt-10 items-center flex justify-center">
        <ContFilter />
      </div>
      <div className="mt-[80px]">
        <Footer />
      </div>
    </>
  );
}

export default Home;
