import React, { useEffect, useContext } from "react";
import { authContext } from "../Context/authContext";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getPackageById,
  clearPackageDetails,
} from "../Redux/Packages/packagesActions";
import { fetchAirlines } from "../Redux/Airlines/airlinesActions";
import { fetchHotels } from "../Redux/Hotels/hotelsActions";
import NavBar from "../Components/NavBar";
import ReviewRating from "../Components/ReviewRating";
import { get_all_bills } from "../Redux/Checkout/checkoutActions";

function MyItinerary() {
  const dispatch = useDispatch();
  const { id, orderId } = useParams();
  // console.log('orderid', orderId)
  const { currentUser } = useContext(authContext);

  // console.log('el user', currentUser)
  // console.log('state', billId)

  const paquete = useSelector((state) => state.packages.packageDetails);
  const hotels = useSelector((state) => state.hotels.hotelsList);
  const airlines = useSelector((state) => state.airlines.airlinesList);
  const allBills = useSelector((state) => state.checkout.allBills);
  // console.log('allBills', allBills)

  useEffect(() => {
    dispatch(getPackageById(id));
    dispatch(fetchAirlines());
    dispatch(fetchHotels());
    dispatch(get_all_bills());
    return () => {
      dispatch(clearPackageDetails());
    };
  }, [id, dispatch]);

  if (!paquete.id) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-verdeFooter text-3xl font-bold">Cargando...</p>
      </div>
    );
  }

  //hotelInfo
  const hotel = hotels.find((el) => el.id === paquete.idHotel);
  const hotelData = hotel ? hotel : "Desconocido";

  //airline
  const airlineData = airlines.find((el) => el.id === paquete.idAirline);
  const airlineName = airlineData ? airlineData.name : "Desconocida";

  //sacar las actividades compradas
  const userBills =
    allBills && allBills.filter((bill) => bill.uidUser === currentUser.uid);
  // console.log("userBills", userBills);

  const thispackage =
    userBills && userBills.find((bill) => bill.id === Number(orderId));
  console.log("este paquete", thispackage);

  const activities_bought = thispackage.ItemsBills.filter(
    (el) => el.typeProduct === 2
  );
  console.log(activities_bought);

  const diasTour = paquete && paquete.duration; //6

  const cantidadDeDias = [];

  
  for (let i = 1; i <= diasTour; i++) {
    cantidadDeDias.push(
      <div
        className="w-[700px] h-[150px] rounded m-5 bg-gray-300 justify-start items-start"
        key={i}
      >
        <span className="ml-5 flex ">Día {i}</span>
        <div className="flex ml-5">{}</div>
        <span className="flex ml-5">Agrega una nota</span>
        <textarea
          className="border-none w-[600px] flex ml-5"
          name=""
          id=""
          cols="1"
          rows="1"
        ></textarea>
        <button className="bg-green-500 m-1 p-2 rounded">Guardar Nota</button>
      </div>
    );
  }

  if (!paquete) {
    <div>
      <span className="text-2xl text-center fontPoppins font-bold text-verdeFooter">
        Cargando...
      </span>
    </div>;
  }

  // console.log("PAQUETE:", paquete);
  return (
    <>
      <div className="bg-verdeFooter ">
        <NavBar />
      </div>
      <div id="contenedor de todo" className="fontPoppins">
        <div className="text-xl mt-8 ml-40 p-2 w-3/4 h-auto">
          <h1 className="text-xl font-bold mb-8">
            {thispackage.User?.name} prepárate para conocer{" "}
            {paquete.Country?.name}...
          </h1>
          <span className="text-left block text-s">
            Llegarás a la ciudad de {paquete.City?.name} el{" "}
            {paquete.initialDate.split("/").reverse().join("/")}
          </span>
          <span className="mb-4 text-left text-s block">
            Tendras {paquete.duration} días para aventurarte en este maravilloso
            destino!
          </span>
        </div>

        <div id="contenedor de itinerario">
          <div className=" flex justify-center items-center">
            <div className="w-[700px] h-auto rounded m-5 bg-gray-300 flex flex-col justify-around items-start p-4">
              <span className="ml-1 font-bold mb-2">Detalles del vuelo</span>
              <span className="ml-5 mb-4">
                Tu aerolínea en este viaje es {airlineName}
              </span>
              <span className="ml-5 font-semibold">Vuelo de ida</span>

              <div className="flex ml-5 bg-gray-200 p-2 rounded m-1 w-3/4">
                {paquete.outboundFlight}
              </div>
              <span className="ml-5 font-semibold">Vuelo de regreso</span>

              <div className="flex ml-5 bg-gray-200 p-2 rounded m-1 w-3/4">
                {paquete.returnFlight}
              </div>
            </div>
          </div>

          <div className=" flex justify-center items-center">
            <div className="w-[700px] h-auto rounded m-5 bg-gray-300 flex flex-col justify-around items-start p-4">
              <span className="ml-1 font-bold mb-2">
                Detalles del Hospedaje
              </span>
              <span className="ml-5 font-semibold">Tu hotel es</span>

              <div className="flex ml-5 bg-gray-200 p-2 rounded m-1 w-3/4 ">
                <h3>{hotelData.name}</h3>
                <ReviewRating className="ml-2 " rating={hotelData.stars} />
              </div>
            </div>
          </div>

          <div className=" flex justify-center items-center">
            <div className="w-[700px] h-auto rounded m-5 bg-gray-300 flex flex-col justify-around items-start p-4">
              <span className="ml-1 font-bold mb-2">Actividades incluídas</span>
              {paquete &&
                paquete.Activities?.map((el, index) =>
                  el.included === true ? (
                    <div key={index}>
                      <span className="ml-5 font-semibold">{el.name}:</span>
                      <span className="ml-5 font-light text-right">
                        {el.duration.includes("Dia")
                          ? "Todo el día"
                          : el.duration}
                      </span>
                    </div>
                  ) : null
                )}
            </div>
          </div>

          <div className=" flex justify-center items-center">
            <div className="w-[700px] h-auto rounded m-5 bg-gray-300 flex flex-col justify-around items-start p-4">
              <span className="ml-1 font-bold mb-2">
                Actividades que compraste
              </span>
              {activities_bought &&
                activities_bought.map((el, index) => (
                  <div key={index}>
                    <span className="ml-5 font-semibold">{el.title}</span>
                  </div>
                ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1">{cantidadDeDias}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyItinerary;
