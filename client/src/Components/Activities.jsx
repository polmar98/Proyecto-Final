import React from "react";
import data from "../packages";

function Activities() {
  const idrequired = 2;
  const tour = data.find((p) => p.Id === idrequired);

  return (
    <div className="m-10">
      <h2 className="text-4xl font-bold">Actividades</h2>
      {tour.Servicios.map((el) => (
        <div key={el.Detalle} className="inline-flex flex-col m-1">
          {el.Url ? (
            <img
              src={el.Url}
              alt="Img not found"
              className="w-[400px] h-[300px] rounded-lg "
            />
          ) : null}
          <h3 className="text-xl font-sans font-semibold">{el.Detalle}</h3>
          {!el.Incluido ? (
            <h4 className="text-xl font-bold">
              Precio:
              {tour.Moneda}
              {el.Precio}
            </h4>
          ) : (
            <h4 className="text-xl font-bold">Actividad incluida</h4>
          )}
        </div>
      ))}
    </div>
  );
}

export default Activities;
