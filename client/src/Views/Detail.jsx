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
      <div className="mb-2 mt-8 md:p-2 md:px-2 ">
        <h1 className="text-xl font-bold text-left fontPoppins">
          Opiniones de otros viajeros:
        </h1>
      </div>
      <section className="my-2  dark:text-gray-100 fontPoppins">
        <div className="container grid grid-cols-2 gap-4 items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
          <div className="flex flex-col max-w-sm mx-4 my-2 shadow-lg rounded-xl ">
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-verdeFooter">
              <p className="relative px-6 py-1 text-lg italic text-center text-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="w-8 h-8 text-green-600"
                >
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus quibusdam, eligendi exercitationem molestias
                possimus facere.
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute right-0 w-8 h-8 text-green-600"
                >
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg  text-gray-900">
              <img
                src="https://source.unsplash.com/50x50/?portrait?1"
                alt=""
                className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 "
              />
              <p className="text-xl font-semibold leadi">Fernando Bouvet</p>
              <p className="text-sm uppercase">05/03/2022</p>
            </div>
          </div>
          <div className="flex flex-col max-w-sm mx-4 my-2 shadow-lg rounded-xl">
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-verdeFooter">
              <p className="relative px-6 py-1 text-lg italic text-center text-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="w-8 h-8 text-green-600"
                >
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus quibusdam, eligendi exercitationem molestias
                possimus facere.
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute right-0 w-8 h-8 text-green-600"
                >
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg  dark:text-gray-900">
              <img
                src="https://source.unsplash.com/50x50/?portrait?2"
                alt=""
                className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 "
              />
              <p className="text-xl font-semibold leadi">Carla Petersen</p>
              <p className="text-sm uppercase">23/09/2022</p>
            </div>
          </div>
        </div>

        <Hotels hotel={hotelData} />
        
        <hr className="mt-10 mb-10"></hr>

        <Review coments={reviewData}/>

        <hr className="mt-10 mb-10"></hr>

        <Activities activity={tour} />
      </div>

      <Footer />
    </>
  );
}

export default Review;