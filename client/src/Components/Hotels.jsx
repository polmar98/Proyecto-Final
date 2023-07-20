import React from "react";
import { BiWifi } from "react-icons/bi";
import {
  MdOutlineFreeBreakfast,
  MdOutlineLocalLaundryService,
  MdSmokeFree,
  MdOutlineAirportShuttle,
} from "react-icons/md/index.esm";
import { RiStarSFill } from "react-icons/ri";



function Hotels({hotel}) {
    console.log(hotel)
    const {name, calification, image, stars} = hotel
 
    // stars del hotel
  const yellowstars = [];
  for (let i = 0; i < stars; i++) {
    yellowstars.push(
      <RiStarSFill
        key={i}
        className="text-yellow-500 text-xl mr-1 inline-flex"
      />
    );
  }

  return (
    <div className="mt-12 text-left fontPoppins">
    <h1 className="text-xl font-bold">{name}</h1>
    <h3 className="text-m">{yellowstars}</h3>
    <h3 className="text-xs font-semibold">
      Calificación: {calification}
    </h3>
    <h3 className="text-xs font-semibold">Pensión Completa</h3>

    <div className="grid grid-cols-2 gap-4 mt-8">
      {image?.map((el, index) => (
        <img
          key={index}
          src={el ? el : null}
          alt="Img not found"
          className="w-full h-auto rounded-lg"
        />
      ))}
    </div>

    <div className="font-medium ">
      <h3 className="text-l font-bold text-left mb-2 mt-8">
        Servicios destacados
      </h3>
      <div className="mt-8 flex flex-wrap justify-around w-6/8">
        <div className="flex items-center mb-2">
          <BiWifi className="text-green-500 text-xl mr-2" />
          <span className="text-m">
            Free WIFI en todas las intalaciones
          </span>
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
  );
}

export default Hotels;
