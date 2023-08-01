import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchCities } from "../Redux/Cities/citiesActions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import RatingStars from "./RatingStars";

function Card({
  id,
  image,
  title,
  idCity,
  duration,
  totalLimit,
  standarPrice,
  qualification,
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  const navigate = useNavigate();
  const cities = useSelector((state) => state.cities.citiesList);

  const cityData = cities.find((city) => city.id === idCity);
  const cityName = cityData ? cityData.name : "Desconocida";

  function navigateHandler() {
    navigate(`/detail/${id}`);
  }
  return (
    <div
      onClick={navigateHandler}
      className="grid grid-cols-3 border-3 border gray-900 rounded-lg p-5 gap-5 cursor-pointer mx-2 mb-4 shadow-xl card hover:scale-110 hover:z-20 "
    >
      <div className="flex items-center justify-start">
        <img
          src={image}
          alt={title}
          className="w-[300px] h-[200px] object-cover rounded-md border border-gray-300"
        />
      </div>

      <div className=" font-bold mt-2 mb-2 w-auto h-auto">
        <div className="mb-1">
        <h2 className="text-xl font-bold mb-2 fontPoppins">{title}</h2>
        </div>
        <div className="mb-4 grid grid-cols-2">
        <h2 className="text-sm  text-gray-500 fontPoppins">{cityName}</h2>
        <RatingStars rating={qualification} className="text-sm text-gray-500"/>
        </div>
        <div className=" text-sm grid grid-cols-2 items-center mt-2 mb-4">
          <span></span>
          
        </div>
        <div className="mb-4">
        <h2 className="text-sm fontPoppins">Duracion: {duration} dias</h2>
        </div>
       <div className="mb-4"> 
        <h2 className="text-xs fontPoppins  text-gray-500"> Cupos: {totalLimit}</h2>
       </div>
       
      </div>

      <div>
        <div className="mt-28 bg-verdeFooter border gray-900 rounded-lg shadow-xl">
        <h2 className=" flex items-center justify-center text-lg font-bold fontPoppins text-white">
          Precio: {standarPrice} USD /Por persona
        </h2>
        </div>

      </div>
    </div>
  );
}

export default Card;
