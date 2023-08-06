import React, { useState, useRef, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import NavBar from "./NavBar";
import Footer from "./Footer";
import { authContext } from "../Context/authContext";
import check from "../assets/Check.mp4";
import { userShopping } from "../Redux/ShoppingCart/shoppingCartActions";
import { create_itinerary, post_bill } from "../Redux/Checkout/checkoutActions";
import { fetchPackages } from "../Redux/Packages/packagesActions";
import { fetchCities } from "../Redux/Cities/citiesActions";
import { fetchCountries } from "../Redux/Country/countriesActions";
import { fetchContinents } from "../Redux/Continent/continentActions";

function PaymentComplete() {
  const { currentUser } = useContext(authContext);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.carrito.status);
  const idCart = useSelector((state) => state.carrito.idCart);
  // console.log("idcart", idCart);
  const cart = useSelector((state) => state.carrito.cart);
  // console.log("el cart", cart);
  const bill = useSelector((state) => state.checkout.bill);
  const tours = useSelector((state) => state.packages.packagesList);
  // console.log("tours", tours);

  const [videoEnded, setVideoEnded] = useState(false);
  const [animationEnded, setAnimationEnded] = useState(false);
  const [userShoppingCompleted, setUserShoppingCompleted] = useState(false);
  const videoRef = useRef(null);

  //estados para el itinerario
  const cities = useSelector((state) => state.cities.citiesList);
  const countries = useSelector((state) => state.countries.countriesList);
  const continents = useSelector((state) => state.continents.continentsList);
  

  // console.log("bill en payment complete", bill);
  // console.log("el carrito en payment:", cart);
  // console.log("paquete info", paqueteInfo);

  //objeto con el idCart para grabar la factura
  const datos = {
    idCar: idCart,
  };

  //filtrar solo los paquetes del carrito
  const packageOnly = cart && cart.filter((el) => el.typeProduct === 1);
  //sacar el id del paquete
  const idPackage = packageOnly && packageOnly.map((el) => el.idProduct);
  console.log("id pack", idPackage);

  //filtrar aquellos paquetes que tengan el id igual a los idPackage, por si compra paquetes distintos
  const filteredTours = tours.filter((el) => idPackage.includes(el.id));
  console.log("los tours que matchean", filteredTours);


  //generar los itinerarios para cada paquete comprado
  const dispatchItinerarios = () => {
    filteredTours.forEach((tour) => {
      const continent =
        continents && continents.find((el) => el.id === tour.idContinent);
      const continentName = continent.name;

      const country =
        countries && countries.find((el) => el.id === tour.idCountry);
      const countryName = country.name;

      const city = cities && cities.find((el) => el.id === tour.idCity);
      const cityName = city.name;

      const itineraryData = {
        continent: continentName,
        country: countryName,
        city: cityName,
        duration: tour.duration,
      };

      console.log("itinerario", itineraryData);

      //despachar cada uno
      dispatch(create_itinerary(itineraryData));
    });
  };



  //obj para crear el itinerario
  // const infoItinerary = {
  //   continent: continentName,
  //   country: countryName,
  //   city: cityName,
  //   duration: paqueteInfo.duration,
  // };

  // console.log("obj", infoItinerary);

  useEffect(() => {
    if (videoEnded) {
      setTimeout(() => {
        setAnimationEnded(true);
      }, 700);
    }
    dispatch(fetchCities());
    dispatch(fetchContinents());
    dispatch(fetchCountries());
    dispatch(fetchPackages());
  }, [videoEnded, dispatch]);

  useEffect(() => {
    if (currentUser) {
      dispatch(userShopping(currentUser.uid)).then(() => {
        setUserShoppingCompleted(true);
      });
    }
  }, [currentUser, dispatch]);

  useEffect(() => {
    if (userShoppingCompleted && idCart && state === 1) {
      dispatch(post_bill(datos));
      if (packageOnly.length > 0) {
        dispatchItinerarios();
      }
    }
  }, [userShoppingCompleted, idCart, state, dispatch]);

  return (
    <>
      <div className="bg-verdeFooter">
        <NavBar />
      </div>
      <div className="flex flex-col items-center justify-center w-2/3 mx-auto">
        {videoEnded && animationEnded ? (
          <div className="bg-white p-8 rounded-2xl my-32 first-letter:rounded-xl shadow-lg animate-fade-up animate-once animate-ease-in-out animate-normal">
            <h1 className="text-gray-400 text-2xl mb-6 font-bold text-center">
              Ahora sí...
            </h1>
            <h2 className="text-4xl mb-6 font-bold text-center fontPoppins">
              Prepárate para tu próximo viaje!
            </h2>

            <p className="text-lg text-gray-500 text-center align-middle fontPoppins mb-6">
              Estamos emocionados por tu próxima aventura y queremos felicitarte
              por dar este paso hacia una experiencia inolvidable.
            </p>
            <p className="text-lg text-gray-500 text-center align-middle fontPoppins mb-6">
              Dentro de las próximas 24 horas recibirás un e-mail con los datos
              de tu compra.
            </p>

            <div className="mb-6 text-gray-500 fontPoppins">
              Número de transacción:
              <span className="text-black font-bold ">
                {bill ? " " + bill.idTransaction : null}
              </span>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <a
                href="/search"
                className="bg-verdeFooter text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300"
              >
                Continúa comprando
              </a>
              <a
                href="/"
                className="text-verdeFooter underline hover:text-green-700 transition duration-300"
              >
                Home
              </a>
            </div>
          </div>
        ) : (
          <video
            ref={videoRef}
            src={check}
            alt="Landing presentation"
            className={
              videoEnded
                ? "h-auto my-44 rounded-xl w-96 animate-jump-out animate-once animate-duration-1000 animate-ease-linear animate-normal"
                : "h-auto my-44 rounded-xl w-96"
            }
            autoPlay
            muted
            playsInline
            onEnded={() => setVideoEnded(true)}
          />
        )}
      </div>
      <Footer />
    </>
  );
}

export default PaymentComplete;
