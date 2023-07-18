import React, { useEffect } from "react";
// import Hotels from "../Components/Hotels";
// import Flights from "../Components/Flights";
// import Activities from "../Components/Activities.jsx";
// import Review from "../Components/Review";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPackageById, clearPackageDetails } from "../Redux/packagesSlice";
import { fetchAirlines } from "../Redux/airlinesSlice";
import { fetchHotels } from "../Redux/hotelsSlice";

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

  const tipoPaquete = tour.TypePackage ? tour.TypePackage.name : "Desconocido";
  // console.log(tipoPaquete)

  useEffect(() => {
    dispatch(getPackageById(id));
    dispatch(fetchAirlines());
    dispatch(fetchHotels());
    return () => {
      dispatch(clearPackageDetails());
    };
  }, [id, dispatch]);

  if (loading) {
    return <div>Cargando...</div>;
  }
  if (rejected) {
    return <div>Error: {rejected}</div>;
  }

  function getBack(event) {
    // event.preventDefault()
    // navigate(-1);
  }

  return (
    <div className="container mx-auto p-4">
      <button
        onClick={getBack()}
        className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-2 px-3 rounded-full float-left ml-3"
      >
        X
      </button>
      <div className="grid grid-cols-2 gap-4">
        <div className="text-left mt-20">
          <h2 className="text-4xl font-bold mb-4">{tour.title}</h2>
          <h2 className="text-xl font-semibold">{tour.description}</h2>
          <h2 className="text-xl font-semibold">
            Salida en {tour.initialDate}
          </h2>
          <h2 className="text-xl font-semibold">Cupos: {tour.totalLimit}</h2>
          <h2 className="text-xl font-bold">
            U$s {tour.standarPrice} {tipoPaquete}
          </h2>
        </div>

        <div className="flex items-center justify-center">
          <img
            src={tour.image}
            alt="Img not found"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      <div className="mt-8 text-left">
        <h2 className="text-3xl font-bold mb-4">Resumen del vuelo</h2>
        <div className="border-2 border-gray-300 rounded px-3 py-3 w-auto">
          <h3 className="text-xl text-center">Salida: {tour.outboundFlight}</h3>
          <hr className="my-2" />
          <h3 className="text-xl text-center">Regreso: {tour.returnFlight}</h3>
          <hr className="my-2" />
          <h3 className="text-xl text-center">Vuelas con {airlineName}</h3>
        </div>
      </div>

      <div className="mt-8 text-left">
        <h1 className="text-4xl font-bold">{hotelData.name}</h1>
        <h3 className="text-xl">{hotelData.stars} estrellas</h3>
        <h3 className="text-xl">Calificación: {hotelData.calification}</h3>
        <h3 className="text-xl">Pensión Completa</h3>
      </div>
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

      <h2 className="text-3xl font-bold mb-4 mt-8 text-left">Actividades</h2>
      <div className="grid grid-cols-3 gap-4 mt-8">
        {tour.Activities?.map((el) => (
          <div
            key={el.id}
            className="block rounded-lg bg-white shadow-sm border border-gray-300 p-4 card hover:scale-110 hover:z-20"
          >
            <a href="#!">
              <img
                className="rounded-t-lg w-full h-auto"
                src={el.image}
                alt="Img not found"
              />
            </a>
            <div className="text-center">
              <h5 className="mb-2 text-2xl font-medium leading-tight text-gray-800">
                {el.name}
              </h5>
              <p className="mb-4 text-base text-gray-600">
                Duración: {el.duration}
              </p>
              {!el.included ? (
                <span>u$s {el.price}</span>
              ) : (
                <span>Actividad incluida</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded mt-10 mb-8 w-1/2 cursor-not-allowed">
        COMPRAR
      </button>
    </div>
  );
}

//    <div className="container mx-auto p-4">
//       <div className="block">
//         <h2 className="text-4xl font-bold font-sans">{tour.title}</h2>
//         <h2 className="text-xl font-semibold font-sans">
//           {tour.description}
//         </h2>
//         <h2 className="text-xl font-semibold font-sans">
//           Salida en {tour.initialDate}
//         </h2>
//         <h2 className="text-xl font-semibold font-sans">Cupos: {tour.totalLimit}</h2>
//         <h2 className="text-xl font-bold font-sans">
//           U$s {tour.standarPrice} {tipoPaquete}
//         </h2>
//       </div>

//      <div className="inline-flex m-1">
//           <img
//             src={tour.image}
//             alt="Img not found"
//             className="w-[400px] h-[300px] rounded-lg"
//           />
//         </div>

//      <div className="flex flex-col items-center justify-center m--10">
//       <h2 className="text-2xl font-bold m-1 inline-block">Resumen del vuelo</h2>
//       <div className="border-2 border-slate-300 w-fit px-3 py-3 flex flex-col">
//         <h3 className="text-xl text-center">Salida: {tour.outboundFlight}</h3>
//         <hr />
//         <h3 className="text-xl text-center">Regreso: {tour.returnFlight}</h3>
//         <hr />
//         <h3 className="text-xl text-center">Vuelas con {airlineName}</h3>
//       </div>
//     </div>

//     <div>
//           <div>
//             <h1 className="text-4xl font-bold">{hotelData.name}</h1>
//             <h3 className="text-xl">{hotelData.stars} estrellas</h3>
//             <h3 className="text-xl">Calificación: {hotelData.calification}</h3>
//             <h3 className="text-xl">Pensión Completa</h3>
//           </div>

//           <div className="grid grid-flow-col place-content-center my-1 ">
//             {hotelData.image?.map((el, index) => (
//               <img
//                 key={index}
//                 src={el}
//                 alt="Img not found"
//                 className="w-[400px] h-[300px] rounded-lg"
//               />
//             ))}
//           </div>

//           <h2>{hotelData.details}</h2>
//     </div>

//     <>
//       {tour.Activities?.map(el =>
//       <div key= {el.id}
//       class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
//       <a href="#!">
//         <img
//           class="rounded-t-lg"
//           src={el.image} alt='Img not found' />
//       </a>
//       <div class="p-6">
//         <h5
//           class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
//           {el.name}
//         </h5>
//         <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
//         Duración: {el.duration} </p>
//         {!el.included ? <span>u$s {el.price}</span> : <span>Actividad incluida</span> }

//       </div>
//     </div>,

//   </div>

//   )
// }

export default Detail;

{
  /* <div key={el.id} >
          <img src={el.image} alt='Img not found' className="w-[400px] h-[300px] rounded-lg"/>
          <h1>{el.name}</h1>
          <h3>Duración: {el.duration}</h3>
          {!el.included ? <span>u$s {el.price}</span> : <span> Actividad incluida</span> }
        </div>)} */
}
