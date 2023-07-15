import React from "react";
import Hotels from "../Components/Hotels";
import Flights from "../Components/Flights";
import Activities from "../Components/Activities"
import Review from "../Components/Review";
import data from "../data"

function Detail() {
  const idrequired = 2;
  const tour = data.find(p => p.Id === idrequired);

  return (
    <div className="container mx-auto p-4">
      <div className="block">
      <h2 className="text-4xl font-bold font-sans">{tour.Titulo}</h2>
      <h2 className="text-xl font-semibold font-sans">Salida en {tour.FechaInicio}</h2>
      <h2 className="text-xl font-semibold font-sans">Cupos: {tour.Cupos}</h2>
      <h2 className="text-xl font-bold font-sans">{tour.Moneda} {tour.Precio} por persona</h2>
      </div>

      {
        tour.Imagenes.map((el, index) =>
          <div key={index} className="inline-flex m-1">
            <img src={el.Url} alt="Img not found" className="w-[400px] h-[300px] rounded-lg"/>
          </div>
          )
      }

      <Flights />
      <Hotels/>
      <Activities />
      <Review />
    </div>
  )
}

export default Detail;
