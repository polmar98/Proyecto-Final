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
      className="grid grid-cols-3 border-3 border gray-900 rounded-lg p-5 gap-5 cursor-pointer mx-2 mb-4"
    >
      <div className="flex items-center justify-start">
        <img
          src={image}
          alt={title}
          className="w-[300px] h-[200px] object-cover rounded-md border border-gray-300"
        />
      </div>

      <div className="text-lg font-bold mt-2 mb-2 w-auto h-auto">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <h2 className="text-xl text-gray-900">Ciudad: {cityName}</h2>
        <h2 className="text-xl">Duracion: {duration} dias</h2>
        <h2 className="text-xl"> Cupos: {totalLimit}</h2>
      </div>

      <div>
        <h2 className=" flex items-center justify-end text-lg font-bold mb-4">
          Precio: {standarPrice} USD /Por persona
        </h2>
        <div className="mt-2 text-lg grid grid-cols-2 items-center">
          <span className="mr-1">Puntuacion: </span>
          <RatingStars rating={qualification} size="text-2xl" />
        </div>
      </div>
    </div>
  );
}

export default Card;
