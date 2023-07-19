import React, { useEffect } from "react";
import { BiWifi } from "react-icons/bi";
import {
  MdOutlineFreeBreakfast,
  MdOutlineLocalLaundryService,
  MdSmokeFree,
  MdOutlineAirportShuttle,
} from "react-icons/md/index.esm";
import { RiStarSFill } from "react-icons/ri";
import Footer from "../Components/Footer";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPackageById, clearPackageDetails } from "../Redux/packagesSlice";
import { fetchAirlines } from "../Redux/airlinesSlice";
import { fetchHotels } from "../Redux/hotelsSlice";
// import { fetchComments } from "../Redux/commentsSlice";

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tour = useSelector((state) => state.packages.packageData);
  const loading = useSelector((state) => state.packages.loading);
  const rejected = useSelector((state) => state.packages.errorId);

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
  // console.log('hotel', hotelData)

   //stars del hotel
   const stars = []
   for (let i = 0; i < hotelData.stars; i++) {
     stars.push(<RiStarSFill key={i} className="text-yellow-500 text-xl mr-1 inline-flex" />);
   }


  const tipoPaquete = tour.TypePackage ? tour.TypePackage.name : "Desconocido";
  // console.log(tipoPaquete)

  // const reviews = useSelector((state) => state.comments.commentsList);
  // const review = reviews.filter((el) => el.idPackage === tour.id);
  // const reviewData = review ? review : "Desconocido";

  // console.log(reviews)

  useEffect(() => {
    dispatch(getPackageById(id));
    dispatch(fetchAirlines());
    dispatch(fetchHotels());
    // dispatch(fetchComments())
    return () => {
      dispatch(clearPackageDetails());
    };
  }, [id, dispatch]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-4xl text-green-800">
        Cargando...
      </div>
    );
  }
  if (rejected) {
    return (
      <div className="flex items-center justify-center h-screen text-4xl text-green-800">
        Error: {rejected}
      </div>
    );
  }

  return (
    <>
    <div className="container mx-auto p-4 m-2 w-3/4">
      <button
        onClick={()=>{navigate(-1)}}
        className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-2 px-3 rounded-full float-right "
      >
        X
      </button>
          <h2 className="text-2xl font-bold mb-4 text-left fontPoppins ml-2 mt-6">{tour.title}</h2>
      <div className="grid grid-cols-2 gap-4 fontPoppins mt-6">
        <div className="text-left rounded-lg w-full flex flex-col justify-between bg-white shadow-xl border border-gray-300 p-4">
          <h2 className="text-s font-medium text-justify">{tour.description}</h2>
          <h2 className="text-s font-medium mt-2">
            Salida en {tour.initialDate}
          </h2>
          <h2 className="text-s font-semibold mt-6">
            USD {tour.standarPrice} -{tipoPaquete}-
          </h2>
          <h2 className="text-xs font-medium">Cupos disponibles: {tour.totalLimit}</h2>
          
          <div className="mt-auto">
          <button className="bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded w-full">
        COMPRAR PAQUETE
      </button>

          </div>

        </div>

        <div className="flex items-center justify-center ">
          <img
            src={tour.image}
            alt="Img not found"
            className="w-full h-auto rounded-lg"
          />
        </div>

      <div className="mt-12 text-left fontPoppins">
        <h2 className="text-l font-bold mb-2">Resumen del vuelo</h2>
        <div className="shadow-xl border-gray-300 p-4 border-2 rounded px-3 py-3 w-2/3">
          <h3 className="text-s font-base text-justify">Salida: {tour.outboundFlight}</h3>
          <hr className="my-2" />
          <h3 className="text-s font-base  text-justify">Regreso: {tour.returnFlight}</h3>
          <hr className="my-2" />
          <h3 className="text-s font-base text-justify">Vuelas con {airlineName}</h3>
        </div>
      </div>

        <div className="mt-12 text-left fontPoppins">
          <h1 className="text-xl font-bold">{hotelData.name}</h1>
          {}
          <h3 className="text-m">{stars}</h3>
          <h3 className="text-xs font-semibold">
            Calificación: {hotelData.calification}
          </h3>
          <h3 className="text-xs font-semibold">Pensión Completa</h3>

          <div className="grid grid-cols-3 gap-4 mt-8">
            {hotelData.image?.map((el, index) => (
              <img
                key={index}
                src={el}
                alt="Img not found"
                className="w-full h-auto rounded-lg"
              />
            ))}
          </div>

        <div className="font-medium text-left">
      <h3 className="text-l font-bold mb-2 mt-8" >Servicios destacados</h3>
      <div className="mt-8 flex flex-wrap justify-around w-3/4">
        <div className="flex items-center mb-2">
          <BiWifi className="text-green-500 text-xl mr-2" />
          <span className="text-m">Free WIFI en todas las intalaciones</span>
        </div>
        <div className="flex items-center mb-2">
          <MdOutlineFreeBreakfast className="text-green-500 text-xl mr-2 ml-6" />
          <span className="text-m">Desayuno incluído</span>
        </div>
        <div className="flex items-center mb-2">
          <MdOutlineLocalLaundryService className="text-green-500 text-xl mr-2 ml-6" />
          <span className="text-m">Lavandería de pago</span>
        </div>
        <div className="flex items-center mb-2">
          <MdSmokeFree className="text-green-500 text-xl mr-2 ml-6" />
          <span className="text-m">Habitaciones libres de humo</span>
        </div>
        <div className="flex items-center mb-2">
          <MdOutlineAirportShuttle className="text-green-500 text-xl mr-2 ml-6" />
          <span className="text-m">Transfer al aeropuerto</span>
        </div>
      </div>
    </div>
  </div>
     

      <h2 className="text-xl font-bold mb-4 mt-12 text-left fontPoppins">Actividades</h2>
      <div className="grid grid-cols-2 gap-4 mt-8">
        {tour.Activities?.map((el) => (
          <div
            key={el.id}
            className="block rounded-lg bg-white shadow-xl border border-gray-300 p-4 card hover:scale-110 hover:z-20"
          >
            <a href="#!">
              <img
                key={index}
                src={el}
                alt="Img not found"
                className="w-full h-auto rounded-lg"
              />
            </a>
            <div className="text-center fontPoppins">
              <h5 className="mb-4 mt-2 text-m font-bold leading-tight text-gray-800">
                {el.name}
              </h5>

              <div className="flex justify-between">
              <p className="mb-2 font-small ml-2 text-gray-600">
                Duración: {el.duration}
              </p>
              {!el.included ? (
                <span className="font-small mb-2 mr-2">USD {el.price}</span>
              ) : (
                <span>Actividad incluida</span>
              )}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
    <Footer/>
    </>
  );
}

export default Detail;
