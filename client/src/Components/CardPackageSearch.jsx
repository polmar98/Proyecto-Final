import React from "react";
import { useNavigate } from "react-router-dom";

function Card({Id,Imagenes,Pais,Titulo,Ciudad,Duracion,Cupos,Moneda,Precio,Promocion,Calificacion}) {

  const navigate = useNavigate()

  const ImgToShow = Imagenes.slice(0,4)

  function navigateHandler() {
    navigate(`/detail/${Id}`);
  }
  return (
    <div onClick={navigateHandler}>
      <div> 
        {ImgToShow.map((imagen)=>(<img src={imagen.Url} alt={Pais} key={imagen.Url}/>))}
      </div>
      <h2>{Titulo}</h2>
      <h2>{Ciudad}</h2>
      <h2>{Duracion}</h2>
      <h2>{Cupos}</h2>
      <div>
      <h2>{Moneda}</h2>
      <h2>{Precio} /Per person </h2>
      </div>
      <div>
      <h2>{Moneda}</h2>
      <h2>{Promocion} /Per person </h2>
      </div>
      <h2>{Calificacion}</h2> 
    </div>
  )
}

export default Card;
