import React, { useContext } from "react";
import NavBar from "../Components/NavBar";
import SearchBar from "../Components/SearchBar";
import ContFilter from "../Components/ContFilter";
import Footer from "../Components/Footer";
import { set_item } from "../Redux/ShoppingCart/shoppingCartActions";
import { fetchPackages } from "../Redux/Packages/packagesActions";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Sale from "../Components/Sale";
import { authContext } from "../Context/authContext";
import { userShopping } from "../Redux/ShoppingCart/shoppingCartActions";

function Home() {
  const dispatch = useDispatch();
  const packages = useSelector((state) => state.packages.packagesList);
  const idCart = useSelector((state) => state.carrito.idCart);

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
    if (currentUser) {
      dispatch(userShopping(currentUser.uid));
    }

    if (!currentUser && !localStorage.getItem("carrito")) {
      //si no hay login y no existe el elemento carrito cuando carga el home
      localStorage.setItem("carrito", "[]"); //lo crea. Recibe como 1er arg la clave y 2do arg el valor, que es un array vacio al ppio
    }
    if (
      currentUser &&
      localStorage.getItem("carrito") &&
      localStorage.getItem("carrito").length > 0
    ) {
      const JSstorage = JSON.parse(localStorage.getItem("carrito"));
      // console.log("ellocalstorageenhome", JSstorage);
  
      JSstorage.forEach((el) => {
        // console.log("CADA ELEMENTO", el);
        dispatch(set_item(idCart, el));
      });
    
      localStorage.clear("carrito");
    }
  }, [dispatch, currentUser]);

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
