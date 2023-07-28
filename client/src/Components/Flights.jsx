import React from "react";

const Flights =  ({tour, airline }) => {
    const {outboundFlight, returnFlight} = tour;
    const {airlineName} = airline

    if(!airline){
      return <div> cargando... </div>
    }

    return (

        <div className="text-left fontPoppins mt-auto">
            <h2 className="text-l font-bold mb-2">Resumen del vuelo</h2>
            <div className="shadow-xl border-gray-300 p-4 border-2 rounded px-3 py-3 w-full">
              <h3 className="text-base">Salida: {outboundFlight}</h3>
              <hr className="my-2" />
              <h3 className="text-base">Regreso: {returnFlight}</h3>
              <hr className="my-2" />
              <h3 className="text-base">Vuelas con {airlineName}</h3>
            </div>
          </div>
       
    )
}
export default Flights;
