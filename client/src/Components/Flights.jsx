import React from "react";
import data from "../data";
// import { useEffect, useState } from "react";

const Flights = () => {
    // const [myData, setmyData] = useState({
    //     departure:"",
    //     back:"",
    //     enterprise:""
    // });
    const idrequired = 2;
    const tour = data.find(p => p.Id === idrequired)
    const departure = tour.Ida;
    const back = tour.Regreso;
    const enterprise = tour.Aerolinea;
    
    // useEffect(() => {
    //   setmyData({departure, back, enterprise})
    // }, [departure, back, enterprise]);

    // console.log(myData)

    return(
        <div className="flex flex-col items-center justify-center m--10">
            <h2 className="text-2xl font-bold m-1 inline-block">Resumen del vuelo</h2>
            
              <div className="border-2 border-slate-300 w-fit px-3 py-3 flex flex-col">
                <h3 className="text-xl text-center">Salida: {departure}</h3>
                <hr/>
                <h3 className="text-xl text-center">Regreso: {back}</h3>
                <hr/>
                <h3 className="text-xl text-center">Vuelas con {enterprise}</h3>
              </div> 
        </div>
    )
};

export default Flights