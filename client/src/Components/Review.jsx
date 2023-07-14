import React from "react";
import data from "../data"

function Review() {
  const idrequired = 2;
  const tour = data.find(p => p.Id === idrequired)

  return (
    <div className="flex m-10">
      <div>
      <h1 className="text-4xl font-bold">Testimonios</h1>
      <h3>Calificación del viaje: {tour.Calificacion}</h3>
      </div>
      {
        tour.Comentarios.map(el => 
          <div key={el.Usuario} clasName="inline-flex flex-row">
            <h4 className="text-2xl font-sans font-bold">{el.Usuario}</h4>
            <h4 className="text-xl font-sans font-light">{el.Fecha}</h4>
            <p className="text-xl font-sans font-semibold">{el.Testimonio}</p>
            
          </div>)
      }
    </div>
  )
}

export default Review;
