import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAirlines, selectAirlines } from "../Redux/airlinesSlice";
import { fetchCities, selectCities } from "../Redux/citiesSlice";
import {
  fetchPackages,
  selectPackages,
  addPackages,
} from "../Redux/packagesSlice";
import { fetchContinents, selectContinents } from "../Redux/continentsSlice";
import { fetchCountries, selectCountries } from "../Redux/countriesSlice";
import { fetchHotels, selectHotels } from "../Redux/hotelsSlice.js";
import { fetchActivitys, selectActivitys } from "../Redux/activitysSlice.js";

const Form = () => {
  const packages = useSelector(selectPackages);
  const continents = useSelector(selectContinents);
  const countries = useSelector(selectCountries);
  const cities = useSelector(selectCities);
  const hotels = useSelector(selectHotels);
  const airlines = useSelector(selectAirlines);
  const activitys = useSelector(selectActivitys);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPackages());
    dispatch(fetchContinents());
    dispatch(fetchCountries());
    dispatch(fetchCities());
    dispatch(fetchHotels());
    dispatch(fetchAirlines());
    dispatch(fetchActivitys());
  }, []);

  /*json de ejemplo

 "idTypePackage": 1,
        "title": "Descubre el paraíso: Cancún",
        "description": "Descubre la magia del caribe mexicano",
        "initialDate": "2023/12/11",
        "finalDate": "2023/12/20",
        "totalLimit": 100,
        "standarPrice": 1690.00,
        "promotionPrice": 1499.00,
        "service": "Translado aeropuerto - hotel -aeropuerto",
        "duration": 10,
        "originCity": 25,
        "idAirline": 1,
        "outboundFlight": "Lun 11 diciembre 09:30AM Buenos Aires|Directo",
        "returnFlight": "Mar 20 diciembre 18:15PM CUN|Directo",
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/40/82/4b/aerial-view.jpg?w=700&h=-1&s=1",
        "qualification":9.4,
        "idContinent": 1,
        "idCity": 1,
        "idHotel": 1,
        "activitys": [
          {
            "name": "Tour a la Isla Mujeres",
            "image":"https://www.turismomexico.es/wp-content/uploads/2016/12/isla-mujeresmexico.jpg",
            "price": 45.00,
            "included": false,
            "duration": "1 Dias"
          },
          {
            "name": "Tour a la Zona Arqueológica de Tulum",
            "image": "https://www.turismomexico.es/wp-content/uploads/2016/12/isla-mujeresmexico.jpg",
            "price": 45.00,
            "included": false,
            "duration": "1 Dia"
          },
          {
            "name": "Tour al cenote Samaal",
            "image": "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/93/db/b8.jpg",
            "price": 55.00,
            "included": false,
            "duration": "1 Dia"
          }
        ]
      },*/

  const [input, setInput] = useState({
    idTypePackage: 1,
    title: "",
    description: "",
    initialDate: "",
    finalDate: "",
    totalLimit: "",
    standarPrice: "",
    promotionPrice: "",
    service: "",
    duration: "",
    originCity: "", //destino
    idAirline: "",
    outboundFlight: "asfasfa",
    returnFlight: "fasfasfas",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/40/82/4b/aerial-view.jpg?w=700&h=-1&s=1",
    qualification: "9.4",
    idContinent: "",
    idCity: "", // salida
    idHotel: "",
    activitys: [],
  });

  const handleInputChange = (event) => {
    const { name, value, options } = event.target;

    if (options && options.multiple) {
      const selectedValues = Array.from(options)
        .filter((option) => option.selected)
        .map((option) => option.value);

      setInput({
        ...input,
        [name]: selectedValues,
      });
    } else {
      setInput({
        ...input,
        [name]: value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addPackages(input))
      .unwrap()
      .then(() => {
        setInput({
          idTypePackage: 1,
          title: "",
          description: "",
          initialDate: "",
          finalDate: "",
          totalLimit: "",
          standarPrice: "",
          promotionPrice: "",
          service: "",
          duration: "",
          originCity: "",
          idAirline: "",
          outboundFlight: "asfasfa",
          returnFlight: "fasfasfas",
          image:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/40/82/4b/aerial-view.jpg?w=700&h=-1&s=1",
          qualification: "9.4",
          idContinent: "",
          idCity: "",
          idHotel: "",
          activitys: [],
        });
        alert("Package created successfully");
      })
      .catch((error) => {
        console.error(error);
        alert("Error occurred while creating the package");
      });
  };

  return (
    <div className="flex h-screen">
      <div className="flex flex-col w-1/2">
        <div className="mx-auto my-auto p-10 w-full md:w-2/3">
          <div className="flex justify-between mb-5">
            <h2 className="text-gray-700 text-lg font-bold">Formulario</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Title"
                value={input.title}
                onChange={handleInputChange}
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Description
              </label>
              <input
                type="text"
                name="description"
                id="description"
                placeholder="Description"
                value={input.description}
                onChange={handleInputChange}
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="initialDate"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Initial Date
              </label>
              <input
                type="date"
                name="initialDate"
                id="initialDate"
                placeholder="Initial Date"
                value={input.initialDate}
                onChange={handleInputChange}
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="finalDate"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Final Date
              </label>
              <input
                type="date"
                name="finalDate"
                id="finalDate"
                placeholder="Final Date"
                value={input.finalDate}
                onChange={handleInputChange}
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="totalLimit"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Total Limit
              </label>
              <input
                type="number"
                name="totalLimit"
                id="totalLimit"
                placeholder="Total Limit"
                value={input.totalLimit}
                onChange={handleInputChange}
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="standarPrice"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Standar Price
              </label>
              <input
                type="number"
                name="standarPrice"
                id="standarPrice"
                placeholder="Standar Price"
                value={input.standarPrice}
                onChange={handleInputChange}
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="promotionPrice"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Promotion Price
              </label>
              <input
                type="number"
                name="promotionPrice"
                id="promotionPrice"
                placeholder="Promotion Price"
                value={input.promotionPrice}
                onChange={handleInputChange}
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="service"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Service
              </label>

              <input
                type="text"
                name="service"
                id="service"
                placeholder="Service"
                value={input.service}
                onChange={handleInputChange}
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="duration"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Duration
              </label>
              <input
                type="number"
                name="duration"
                id="duration"
                placeholder="Duration"
                value={input.duration}
                onChange={handleInputChange}
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="originCity"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Destino ciudad
              </label>
              <select
                name="originCity"
                id="originCity"
                value={input.originCity}
                onChange={handleInputChange}
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Select a city</option>
                {cities.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-5">
              <label
                htmlFor="idAirline"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Id Airline
              </label>
              <select
                name="idAirline"
                id="idAirline"
                value={input.idAirline}
                onChange={handleInputChange}
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Select an airline</option>
                {airlines.map((airline) => (
                  <option key={airline.id} value={airline.id}>
                    {airline.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-5">
              <label
                htmlFor="idContinent"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Id Continent
              </label>
              <select
                name="idContinent"
                id="idContinent"
                value={input.idContinent}
                onChange={handleInputChange}
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Select a continent</option>
                {continents.map((continent) => (
                  <option key={continent.id} value={continent.id}>
                    {continent.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-5">
              <label
                htmlFor="idCity"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Salida de ciudad
              </label>
              <select
                name="idCity"
                id="idCity"
                value={input.idCity}
                onChange={handleInputChange}
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Select a city</option>
                {cities.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-5">
              <label
                htmlFor="idHotel"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Id Hotel
              </label>
              <select
                name="idHotel"
                id="idHotel"
                value={input.idHotel}
                onChange={handleInputChange}
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Select a hotel</option>
                {hotels.map((hotel) => (
                  <option key={hotel.id} value={hotel.id}>
                    {hotel.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-5">
              <label
                htmlFor="idHotel"
                className="block mb-2 text-sm font-medium text-gray-600"
              >
                Activitys
              </label>
              <select
                name="activitys"
                id="activitys"
                value={input.activitys}
                onChange={handleInputChange}
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Select a activitys</option>
                {activitys.map((activitys) => (
                  <option key={activitys.id} value={activitys.id}>
                    {activitys.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-5">
              <button
                type="submit"
                className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
