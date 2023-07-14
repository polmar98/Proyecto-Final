import React, {useState, useEffect} from "react";
import data from "../data"

function Hotels() {
  const [myData, setmyData] = useState([]);
  const idrequired = 2;
  const tour = data.find(p => p.Id === idrequired)
  
  useEffect(() => {
    const dataArray = tour.Alojamiento.map(el => 
    Object.entries(el).reduce((acc, [key, value]) => {
      if (Array.isArray(value)) {
        return { ...acc, [key]: value.map((el) => ({ ...el })) };
      } else {
        return { ...acc, [key]: value };
      }
    }, {})
  );
  setmyData(dataArray)
    // console.log(tour)
  }, [tour])

  // console.log('la data', myData)

  return (
    <div>
      {
      myData.map(el =>
      <div>
        <div key={el.Hotel}>
          <h1 className="text-4xl font-bold">{el.Hotel}</h1>
          <h3 className="text-xl">{el.Estrellas} estrellas</h3>
          <h3 className="text-xl">Calificación: {el.Calificacion}</h3>
          <h3 className="text-xl">{el.RegimenComidas}</h3>
        </div>
        
        <div className="grid grid-flow-col place-content-center my-1 ">
          {el.Imagenes.map((el, index) => 
            <img key= {index} src={el.Url} alt="Img not found" className="w-[400px] h-[300px] rounded-lg"/>)}
        </div>

        <h2 className="text-3xl font-bold my-3">Habitaciones</h2>
          {el.Habitaciones.map(el =>
          <div key={el.Tipo} className="inline-flex flex-col m-1">
            <h3 className="text-xl">{el.Tipo}</h3>
            <h3 className="text-xl">{el.Calificacion}</h3>
            <img src={el.Url} alt="Img not found" className="w-[400px] h-[300px] rounded-lg "/>
          </div>
            )}
        
        </div>

        

      )}

    </div>
  ) 
}

export default Hotels;