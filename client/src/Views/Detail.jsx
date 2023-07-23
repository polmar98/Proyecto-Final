import React, { useEffect } from "react";
import Footer from "../Components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getPackageById,
  clearPackageDetails,
} from "../Redux/Packages/packagesActions";
import { fetchAirlines } from "../Redux/Airlines/airlinesActions";
import { fetchHotels } from "../Redux/Hotels/hotelsActions";
import Flights from "../Components/Flights";
import Hotels from "../Components/Hotels";
import Activities from "../Components/Activities";
import { add_to_cart } from "../Redux/ShoppingCart/shoppingCartActions";

function Detail() {
  const { id } = useParams();
  // const user = useSelector((state) => state.users.user);
  // console.log("USER: ", user);
  const user = 1;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tour = useSelector((state) => state.packages.packageDetails);

  // console.log("elpaquete", tour.title);

  //airline nombre
  const airlines = useSelector((state) => state.airlines.airlinesList);
  const airlineData = airlines.find((el) => el.id === tour.idAirline);
  const airlineName = airlineData? airlineData.name : "Desconocida";
  // console.log('aerolinea', airlineName)

  //hotelInfo
  const hotels = useSelector((state) => state.hotels.hotelsList);
  const hotel = hotels.find((el) => el.id === tour.idHotel);
  const hotelData = hotel ? hotel : "Desconocido";
  // console.log("hotel", hotelData);

  const tipoPaquete = tour.TypePackage ? tour.TypePackage.name : "Desconocido";
  // console.log(tipoPaquete)

  // const reviews = useSelector((state) => state.comments.commentsList);
  // const review = reviews.filter((el) => el.idPackage === tour.id);
  // const reviewData = review ? review : "Desconocido";

  // console.log(reviews)

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getPackageById(id));
    dispatch(fetchAirlines());
    dispatch(fetchHotels());
    // dispatch(fetchComments())
    dispatch(clearPackageDetails());
    return () => {
      // dispatch(clearPackageDetails());
    };
  }, [id, dispatch]);

  // item para guardar en el carrito
  const item = {
    idUser: tour.id,
    items: [
      {
        amount: 1,
        unitPrice: tour.standarPrice,
        totalPrice: tour.promotionPrice,
        typeProduct: 1,
        idProduct: tour.id,
        title: tour.title,
      },
    ],
    //  id: tour.id,
    // title: tour.title,
    // image: tour.image,
    // price: tour.standarPrice,
    // amount: 1,
    // activities: tour.Activities,
  };
  // {
  // 	 "idUser": 1,
  // 	 "items": [
  // 		  {
  // 				"amount": 2,
  // 				"unitPrice": 1499,
  // 				"totalPrice": 2998,
  // 				"typeProduct": 1,
  // 				"idProduct": 1,
  // 				"title": "Paq. Turistico a Cancun"
  // 			},

  // 		  {
  // 				"amount": 2,
  // 				"unitPrice": 55,
  // 				"totalPrice": 110,
  // 				"typeProduct": 2,
  // 				"idProduct": 3,
  // 				"title":  "Actividad: Tour al cenote Samaal"
  // 			}
  // 	 ]

  // }

  //agregar items al localStorage
  function addNewItem() {
    let localStorageJSON = localStorage.getItem("carrito");
    // console.log('JSON', localStorageJSON)
    let storedItems = [];
    if (localStorageJSON !== null) {
      storedItems = JSON.parse(localStorageJSON); //convierte a JS
      // console.log("js", storedItems);
    }
    storedItems.push(item);
    const updatedItemsJSON = JSON.stringify(storedItems);
    // console.log("asi queda el json final", updatedItemsJSON);
    localStorage.setItem("carrito", updatedItemsJSON); //lo convierte a json
  }

  //! german:
  async function guardarEnBDD() {
    try {
      const response = await fetch("http://localhost:3002/shoppingCar/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });

      if (response.ok) {
        console.log("todo ok");
      } else {
        console.log("error al guardar el carrito en bdd.");
      }
    } catch (error) {
      console.error("error:", error);
    }
  }

  function changeNavigate() {
    if (user) {
      dispatch(add_to_cart(item));
      guardarEnBDD();
    } else {
      addNewItem();
      // console.log('detail', localStorage)
    }
    navigate("/shoppingCart");
  }

  // if (loading) {
  //   return (
  //     <div className="flex items-center justify-center h-screen text-4xl text-green-800">
  //       Cargando...
  //     </div>
  //   );
  // }
  // if (rejected) {
  //   return (
  //     <div className="flex items-center justify-center h-screen text-4xl text-green-800">
  //       Error: {rejected}
  //     </div>
  //   );
  // }

  return (
    <>
      <div className="container mx-auto p-4 m-2 w-2/3">
        <button
          onClick={() => {
            navigate(-1);
            dispatch(clearPackageDetails());
          }}
          className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-2 px-4 rounded-full inline-flex mb-4"
        >
          X
        </button>

        <div className="flex items-center justify-center">
          <div className="relative">
            <img
              src={tour.image}
              alt="Img not found"
              className="w-3/4 h-auto rounded-full m-auto shadow-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <h2 className="text-2xl text-white fontPoppins font-extrabold text-center bg-stone-400 rounded-full bg-stone-600/75 p-2">
                {tour.title}
              </h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 fontPoppins mt-6">
          <Flights tour={tour} airlinename={airlineName} />

          <div className="text-right w-full flex flex-col justify-between bg-white mt-4 ">
            <h2 className="text-s font-medium">{tour.description}</h2>
            <h2 className="text-s font-base mt-2">{tour.duration} días</h2>
            <h2 className="text-s font-base">Salida en {tour.initialDate}</h2>
            <h2 className="text-s font-base">
              Calificación que le dieron otros viajeros: {tour.qualification}
            </h2>
            <h2 className="text-s font-semibold mt-6">
              USD {tour.standarPrice} -{tipoPaquete}-
            </h2>
            <h2 className="text-xs font-medium mb-8">
              Cupos disponibles: {tour.totalLimit}
            </h2>

            <div>
              <button
                onClick={() => {
                  changeNavigate();
                }}
                className="bg-green-700 hover:bg-green-800 text-white py-2 px-2 rounded w-3/4"
              >
                AGREGAR AL CARRITO
              </button>
            </div>
          </div>
        </div>

        <Hotels hotel={hotelData} />

        <Activities activity={tour} />
      </div>

      <Footer />
    </>
  );
}

export default Detail;
