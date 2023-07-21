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

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tour = useSelector((state) => state.packages.packageDetails);

  // console.log('elpaquete', tour)

  //airline nombre
  const airlines = useSelector((state) => state.airlines.airlinesList);
  const airlineData = airlines.find((el) => el.id === tour.idAirline);
  const airlineName = airlineData ? airlineData.name : "Desconocida";
  // console.log('aerolinea', airlineName)

  //hotelInfo
  const hotels = useSelector((state) => state.hotels.hotelsList);
  const hotel = hotels.find((el) => el.id === tour.idHotel);
  const hotelData = hotel ? hotel : "Desconocido";
  console.log("hotel", hotelData);

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


  function changeNavigate(event) {
    navigate('/ShoppingCart')
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
            <h2 className="text-s font-base">Calificación que le dieron otros viajeros: {tour.qualification}</h2>
            <h2 className="text-s font-semibold mt-6">
              USD {tour.standarPrice} -{tipoPaquete}-
            </h2>
            <h2 className="text-xs font-medium mb-8">
              Cupos disponibles: {tour.totalLimit}
            </h2>

            <div>
              <button onClick={() => {changeNavigate()}} className="bg-green-700 hover:bg-green-800 text-white py-2 px-2 rounded w-3/4">
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
