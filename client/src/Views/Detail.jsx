import React, { useEffect, useContext } from "react";
import { authContext } from "../Context/authContext";
import { toast } from "react-toastify";
import Footer from "../Components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getPackageById,
  clearPackageDetails,
} from "../Redux/Packages/packagesActions";
// import { fetchComents } from "../Redux/Comments/commentsActions";
import { fetchAirlines } from "../Redux/Airlines/airlinesActions";
import { fetchHotels } from "../Redux/Hotels/hotelsActions";
import Flights from "../Components/Flights";
import Hotels from "../Components/Hotels";
import Activities from "../Components/Activities";
import Review from "../Components/Review";
import NavBar from "../Components/NavBar";
import { userShopping } from "../Redux/ShoppingCart/shoppingCartActions";

function Detail() {
  const { currentUser } = useContext(authContext);
  const { id } = useParams();


  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tour = useSelector((state) => state.packages.packageDetails);
  const idCart = useSelector((state) => state.carrito.idCart);
  const car = useSelector((state) => state.carrito.cart);
  // console.log("EL ID", idCart);
  // console.log("EL CART DE MIERDA ", car);
console.log('eltour', tour)

  //reviews
  const reviewData = tour.Comments ? tour.Comments : "Desconocido";
  console.log('reviewData', reviewData)


  //hotelInfo
  const hotels = useSelector((state) => state.hotels.hotelsList);
  const hotel = hotels.find((el) => el.id === tour.idHotel);
  const hotelData = hotel ? hotel : "Desconocido";
  // console.log("hotel", hotelData);

  const tipoPaquete = tour.TypePackage ? tour.TypePackage.name : "Desconocido";
  // console.log(tipoPaquete)



  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getPackageById(id));
    dispatch(fetchAirlines());
    dispatch(fetchHotels());
    // dispatch(fetchComents())

    if (currentUser) {
      dispatch(userShopping(currentUser.uid));
    }
    // dispatch(fetchComments())
    return () => {
      dispatch(clearPackageDetails());
      
    };
  }, [id, dispatch, currentUser]);

  // item para guardar en el carrito
  const item = {
    amount: 1,
    unitPrice: tour.standarPrice,
    totalPrice: tour.standarPrice,
    typeProduct: 1,
    idProduct: tour.id,
    title: tour.title,
    image: tour.image,
  };


  //agregar items al localStorage
  function addNewItem(item) {
    let localStorageJSON = localStorage.getItem("carrito");
    localStorage.setItem("itemAmount_" + item.idProduct, item.amount);
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
    // console.log("js", storedItems);
  }

  //! german
  async function guardarEnBDD(parametro) {
    // console.log("item desde actvity", parametro);
    if (idCart) {
      const response1 = await fetch(
        `http://localhost:3002/shoppingCar/${idCart}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(parametro),
        }
      );
      //      console.log(response1);
    }
  }


  function changeNavigate(parametro) {
    if (currentUser) {
      // console.log("EsTO ES CURRENTUSER:", currentUser);
      if(!car.some(el => el.idProduct === item.idProduct)){
        guardarEnBDD(parametro);
        dispatch(userShopping(currentUser.uid));
      } else {
        guardarEnBDD({...parametro, amount: parametro.amount + 1})
        dispatch(userShopping(currentUser.uid))
      }

    } else {
      addNewItem(parametro);
      // console.log('detail', localStorage)
    }
  }

  if (!tour) {
    return (
      <div className="flex items-center justify-center h-screen text-4xl text-green-800">
        Cargando...
      </div>
    );
  }


  return (
    <>
      <div className="bg-verdeFooter border-b border-white">
        <NavBar />
      </div>
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
          <Flights tour={tour} />

          <div className="text-right w-full flex flex-col justify-between bg-white mt-4 ">
            <h2 className="text-s font-medium">{tour.description}</h2>
            <h2 className="text-s font-base mt-2">{tour.duration} días</h2>
            <h2 className="text-s font-base">Salida en {tour.initialDate}</h2>
            {tour.originCity ? <h2 className="text-s font-base">desde {tour.originCity} </h2> : null }
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
                  changeNavigate(item);
                  toast.success("Has agregado un paquete al carrito.");
                }}
                className="bg-green-700 hover:bg-green-800 text-white py-2 px-2 rounded w-3/4"
              >
                AGREGAR AL CARRITO
              </button>
            </div>
          </div>
        </div>

        <Hotels hotel={hotelData} />
        
        <hr className="mt-8"></hr>

        <Activities activity={tour} />

        <hr className="mt-8"></hr>

        <Review coments={reviewData}/>
      </div>

      <Footer />
    </>
  );
}

export default Detail;
