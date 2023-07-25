import React, { useContext } from "react";
import NavBar from "../Components/NavBar";
import SearchBar from "../Components/SearchBar";
import ContFilter from "../Components/ContFilter";
import Footer from "../Components/Footer";

import { fetchPackages } from "../Redux/Packages/packagesActions";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Sale from "../Components/Sale";
import { authContext } from "../Context/authContext";

function Home() {
  const dispatch = useDispatch();
  const packages = useSelector((state) => state.packages.packagesList);
  const user = useSelector((state) => state.users.user);
  const { currentUser } = useContext(authContext);
  console.log(currentUser);
  if (currentUser) {
    console.log(currentUser.displayName);
    console.log(currentUser.uid);
    console.log("hay usuario");
  } else {
    console.log("no hay usuario");
  }

  useEffect(() => {
    dispatch(fetchPackages());

    if (!user && !localStorage.getItem("carrito")) {
      //si no hay login y no existe el elemento carrito cuando carga el home
      localStorage.setItem("carrito", "[]"); //lo crea. Recibe como 1er arg la clave y 2do arg el valor, que es un array vacio al ppio
    }
  }, [dispatch, user]);

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
        <Sale paquetes={packages} />
      </div>
      <div className="mt-16 items-center flex justify-center">
        <ContFilter paquetes={packages} />
      </div>
      <div className="mt-[80px]">
        <Footer />
      </div>
    </>
  );
}

export default Home;
