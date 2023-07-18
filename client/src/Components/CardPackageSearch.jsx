import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {fetchCities} from "../Redux/citiesSlice"
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function Card({id,image,title,city,idCity,duration,totalLimit,standarPrice,qualification}) {

const dispatch = useDispatch()
  
  useEffect (()=>{
    dispatch(fetchCities())
  },[dispatch])


  const navigate = useNavigate()
  const cities = useSelector((state) => state.cities.citiesList);

  const cityData = cities.find((city) => city.id === idCity)
  const cityName = cityData ? cityData.name : "Desconocida";

  

  function navigateHandler() {
    navigate(`/detail/${id}`);
  }
  return (
    <div onClick={navigateHandler} className="grid grid-cols-2">
      <div className="flex items-center p-4 bg-white rounded-lg cursor-pointer"> 
        <img src={image} alt={title} className="w-[400px] h-[300px] rounded-lg mr-4"/>
      </div >
<div className="flex flex-col">
<h2>{title}</h2>
      <h2>Ciudad: {cityName}</h2>
      <h2>Duracion: {duration} dias</h2>
      <h2> Cupos: {totalLimit}</h2>
      <div>
          <h2> Precio: {standarPrice} USD /Por persona </h2>
      </div>
           <h2>Puntuacion: {qualification}</h2> 
</div>
      
    </div>
  )
}


export default Card;
