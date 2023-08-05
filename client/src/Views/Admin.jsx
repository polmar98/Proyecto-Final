import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPackages } from "../Redux/Packages/packagesActions";
import { fetchAirlines } from "../Redux/Airlines/airlinesActions";
import { fetchCities } from "../Redux/Cities/citiesActions";
import { fetchContinents } from "../Redux/Continent/continentActions";
import { fetchCountries } from "../Redux/Country/countriesActions";
import { fetchHotels } from "../Redux/Hotels/hotelsActions";
import { getCityOrigin } from "../Redux/Cities/citiesActions";
import { AiOutlinePlusSquare } from "react-icons/ai";
import FormNewCityOrigin from "../Components/FormNewCityOrigin";
import FormNewCityDestiny from "../Components/FormNewCityDestiny";
import FormNewAirline from "../Components/FormNewAirline";
import FormNewHoltel from "../Components/FormNewHotel";
import FormActivity from "../Components/FormActivitys";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import axios from "axios";

const Form = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const packages = useSelector((state) => state.packages.packagesList);
  const continents = useSelector((state) => state.continents.continentsList);
  // console.log("Continents:", continents)
  const countries = useSelector((state) => state.countries.countriesList);
  const cities = useSelector((state) => state.cities.citiesList);
  // console.log("cities:", cities)
  const hotels = useSelector((state) => state.hotels.hotelsList);
  const airlines = useSelector((state) => state.airlines.airlinesList);
  const activitys = useSelector((state) => state.activitys.activitysList);
  const cityOrigin = useSelector((state) => state.cities.citiesOrigin);
  // console.log("cityorigin:", cityOrigin)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAirlines());
    dispatch(fetchCities());
    dispatch(fetchContinents());
    dispatch(fetchCountries());
    dispatch(fetchHotels());
    dispatch(getCityOrigin());
  }, [dispatch]);

  

  const [input, setInput] = useState({
    idTypePackage: 1,
    title: "",
    description: "",
    initialDate: "",
    finalDate: "",
    totalLimit: 0,
    standarPrice: 0,
    promotionPrice: 0,
    service: "",
    duration: "",
    originCity: "", //salida
    idAirline: "",
    outboundFlight: "",
    returnFlight: "",
    image: "",
    qualification: "",
    idContinent: 0,
    idCountry: "",
    idCity: "", // destino
    idHotel: "",
    activitys: [],
  });

  const [filteredCountries, setFilteredCountries] = useState([]);

  const handleContinentChange = (event) => {
    const selectedContinentId = parseInt(event.target.value);
    const filteredCountries = countries.filter(
      (country) => country.idContinent === selectedContinentId
    );
    setFilteredCountries(filteredCountries);
    setInput({
      ...input,
      idContinent: selectedContinentId,
      idCountry: "", // Reinicia el país seleccionado cuando cambia el continente
      idCity: "", // Reinicia la ciudad seleccionada cuando cambia el continente
    });
  };

  const [filteredCities, setFilteredCities] = useState([]);

  const handleCountryChange = (event) => {
    const selectedCountryId = parseInt(event.target.value);
    const filteredCities = cities.filter(
      (city) => city.idCountry === selectedCountryId
    );
    setFilteredCities(filteredCities);
    setInput({
      ...input,
      idCountry: selectedCountryId,
      idCity: "", // Reiniciar la ciudad seleccionada cuando cambie el país
    });
  };

  const [filteredHotels, setFilteredHotels] = useState([]);

  const handleCityChange = (event) => {
    const selectedCityId = parseInt(event.target.value);
    const filteredHotels = hotels.filter(
      (hotel) => hotel.idCity === selectedCityId
    );
    setFilteredHotels(filteredHotels);
    setInput({
      ...input,
      idCity: selectedCityId,
      idHotel: "", // Reiniciar la ciudad seleccionada cuando cambie el país
    });
  };

  const handleInputChange = (event) => {
    const { name, value, options } = event.target;

    if (name === "idCity") {
      const selectedCityId = parseInt(value);
      const selectedCity = cities.find((city) => city.id === selectedCityId);

      if (selectedCity) {
        setDestinationCity(selectedCity.name);

        const associatedCountry = countries.find(
          (country) => country.id === selectedCity.idCountry
        );

        if (associatedCountry) {
          setDestinationCountry(associatedCountry.name);
          setInput({
            ...input,
            idCity: selectedCityId,
            idCountry: associatedCountry.id,
          });
        }
      }
    }

    if (options && options.multiple) {
      const selectedValues = Array.from(options)
        .filter((option) => option.selected)
        .map((option) => option.value);

      setInput({
        ...input,
        [name]: selectedValues,
      });
    } else {
      //Lucas agregue esto para que convierta los valores que se espera sean numericos y llegaban como string
      const parsedValue = !isNaN(value) ? parseFloat(value) : value;
      setInput({
        ...input,
        [name]: parsedValue,
      });
    }
    if (name === "service") {
      setInput({
        ...input,
        service: value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitting package:", input);
    try {
      dispatch(addPackages(input));
      setInput({
        idTypePackage: 1,
        title: "",
        description: "",
        initialDate: "",
        finalDate: "",
        totalLimit: 0,
        standarPrice: 0,
        promotionPrice: 0,
        service: "",
        duration: "",
        originCity: "",
        idAirline: 0,
        outboundFlight: "",
        returnFlight: "",
        image: "",
        qualification: "9.4",
        idContinent: 0,
        idCountry: 3,
        idCity: "",
        idHotel: 0,
        activitys: [],
      });
      alert("Package created successfully");
    } catch (error) {
      console.error(error);
      alert("Error occurred while creating the package");
    }
  };

  const calculatePromotionPrice = () => {
    const standatPrice = parseFloat(input.standarPrice);
    const discountpercentage = 15;
    const promotionPrice = standatPrice * (1 - discountpercentage / 100);
    return promotionPrice.toFixed(2);
  };
  // Estado para controlar la visibilidad del formulario de nueva ciudad de origen
  const [showNewCityForm, setShowNewCityForm] = useState(false);

  // Función para mostrar el formulario de nueva ciudad de origen
  const handleShowNewCityOriginForm = (e) => {
    e.preventDefault();
    setShowNewCityForm(true);
  };

  const handleHideNewCityOriginForm = () => {
    setShowNewCityForm(false);
  };

  // Estado para controlar la visibilidad del formulario de nueva ciudad de destino
  const [showNewCityDestinyForm, setShowNewCityDestinyForm] = useState(false);

  const [destinationCity, setDestinationCity] = useState("");
  const [destinationCountry, setDestinationCountry] = useState("");

  // Función para mostrar el formulario de nueva ciudad de origen
  const handleShowNewCityDestinyOriginForm = (e) => {
    e.preventDefault();
    setShowNewCityDestinyForm(true);
  };

  const handleHideNewCityDestinyForm = () => {
    setShowNewCityDestinyForm(false);
  };

  // Estado para controlar la visibilidad del formulario de nueva aerolinea
  const [showNewAirlineForm, setShowNewAirlineForm] = useState(false);

  // Función para mostrar el formulario de nueva Aerolinea
  const handleShowNewAirlineForm = (e) => {
    e.preventDefault();
    setShowNewAirlineForm(true);
  };

  const handleHideNewAirlineForm = () => {
    setShowNewAirlineForm(false);
  };

  // Estado para controlar la visibilidad del formulario de nuevo hotel
  const [showNewHotelForm, setShowNewHotelForm] = useState(false);

  // Función para mostrar el formulario de nuevo hotel
  const handleShowNewHotelForm = (e) => {
    e.preventDefault();
    setShowNewHotelForm(true);
  };

  const handleHideNewHotelForm = () => {
    setShowNewHotelForm(false);
  };

  // Estado para controlar la visibilidad del formulario de nueva actividad
  const [showActivityForm, setShowActivityForm] = useState(false);

  // Función para mostrar el formulario de nuevo Actividades
  const handleShowactivityForm = (e) => {
    e.preventDefault();
    setShowActivityForm(true);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      // Subir la imagen a Cloudinary y obtener la URL
      const cloudName = "dro5aw3iy";
      const uploadPreset = "images";

      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", uploadPreset);

      axios
        .post(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          formData
        )
        .then((response) => {
          const imageUrl = response.data.secure_url;
          setInput({
            ...input,
            image: imageUrl,
          });
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
        });
    }
  };

  return (
    <div className="flex h-screen">
   
        <Tabs>
        <TabList>
              <Tab>Datos Generales</Tab>
              <Tab>Ubicación</Tab>
              <Tab>Datos de Vuelo</Tab>
              <Tab>Alojamiento y Servicios</Tab>
            </TabList>
     
            <TabPanel>
              <div>
                <h2 className="text-gray-700 text-lg font-bold">
                  ¡Creador de viajes!
                </h2>
                <h2>Datos generales</h2>

                <div>
                  <div className="mb-5">
                    <label
                      htmlFor="title"
                      className="block mb-2 text-sm font-medium text-gray-600"
                    >
                      Nombre del viaje:
                    </label>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      placeholder="Nombre..."
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
                      Description:
                    </label>
                    <textarea
                      type="text"
                      name="description"
                      id="description"
                      placeholder="Description"
                      maxLength="250"
                      value={input.description}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>

                  <div className="mb-5">
                    <label htmlFor="image">Subir imagen:</label>
                    <input
                      type="file"
                      name="image"
                      id="image"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </div>

                  {input.image && (
                    <img
                      src={input.image}
                      alt="Uploaded"
                      style={{ maxWidth: "100%" }}
                    />
                  )}
                  <div className="mb-5">
                    <label
                      htmlFor="initialDate"
                      className="block mb-2 text-sm font-medium text-gray-600"
                    >
                      Fecha de ida:
                    </label>
                    <input
                      type="date"
                      name="initialDate"
                      id="initialDate"
                      placeholder="Fecha de inicio ..."
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
                      Fecha de regreso:
                    </label>
                    <input
                      type="date"
                      name="finalDate"
                      id="finalDate"
                      placeholder="Fecha final..."
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
                      Cupos disponibles:
                    </label>
                    <input
                      type="number"
                      name="totalLimit"
                      id="totalLimit"
                      placeholder="Cupos ..."
                      min="0"
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
                      Precio:
                    </label>
                    <input
                      type="number"
                      name="standarPrice"
                      min="0"
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
                      precio de promoción:
                    </label>
                    <input
                      type="number"
                      name="promotionPrice"
                      id="promotionPrice"
                      placeholder="Promotion Price"
                      value={calculatePromotionPrice()}
                      readOnly
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="duration"
                      className="block mb-2 text-sm font-medium text-gray-600"
                    >
                      Duración:
                    </label>
                    <input
                      type="number"
                      name="duration"
                      min="0"
                      id="duration"
                      placeholder="Cuantos dias..."
                      value={input.duration}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="qualification"
                      className="block mb-2 text-sm font-medium text-gray-600"
                    >
                      Calificacion del paquete
                    </label>
                    <input
                      type="number"
                      name="qualification"
                      id="qualification"
                      min="0"
                      step="0.5"
                      max="10"
                      placeholder="Vuelo de regreso..."
                      value={input.qualification}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                </div>
              </div>
              </TabPanel>

              <TabPanel>
              <div>
                <h2>Ubicación</h2>
                <div>
                  <div className="mb-5">
                    <label
                      htmlFor="originCity"
                      className="block mb-2 text-sm font-medium text-gray-600"
                    >
                      Ciudad de partida:
                    </label>
                    <select
                      name="originCity"
                      id="originCity"
                      value={input.originCity}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option value="">Seleccione una ciudad </option>
                      {cityOrigin.map((city) => (
                        <option key={city.id} value={city.id}>
                          {city.name}
                        </option>
                      ))}
                    </select>
                    <div>
                      <button
                        className="bg-green-400 rounded p-2 m-2 mt-3 px-3 py-2 text-white focus:outline-none"
                        onClick={handleShowNewCityOriginForm}
                      >
                        <AiOutlinePlusSquare size={32} color="white" /> Nueva
                        ciudad
                      </button>

                      {showNewCityForm && (
                        <FormNewCityOrigin
                          onHideForm={handleHideNewCityOriginForm}
                        />
                      )}
                    </div>
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="idContinent"
                      className="block mb-2 text-sm font-medium text-gray-600"
                    >
                      Continente:
                    </label>
                    <select
                      name="idContinent"
                      id="idContinent"
                      value={input.idContinent}
                      onChange={(event) => {
                        handleInputChange(event);
                        handleContinentChange(event);
                      }}
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option value="">Seleccione un Continente </option>
                      {continents.map((continent) => (
                        <option key={continent.id} value={continent.id}>
                          {continent.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="idCountry"
                      className="block mb-2 text-sm font-medium text-gray-600"
                    >
                      País de destino:
                    </label>

                    <select
                      name="idCountry"
                      id="idCountry"
                      value={input.idCountry}
                      onChange={(event) => {
                        handleInputChange(event);
                        handleCountryChange(event);
                      }}
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option value="">Seleccione un País</option>
                      {filteredCountries.map((country) => (
                        <option key={country.id} value={country.id}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-5">
                    <label
                      htmlFor="idCity"
                      className="block mb-2 text-sm font-medium text-gray-600"
                    >
                      Ciudad de destino:
                    </label>
                    <select
                      name="idCity"
                      id="idCity"
                      value={input.idCity}
                      onChange={(event) => {
                        handleInputChange(event);
                        handleCityChange(event);
                      }}
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option value="">Seleccione una ciudad</option>
                      {filteredCities.map((city) => (
                        <option key={city.id} value={city.id}>
                          {city.name}
                        </option>
                      ))}
                    </select>
                    <button
                      className="bg-green-400 rounded p-2 m-2 mt-3 px-3 py-2 text-white focus:outline-none"
                      onClick={handleShowNewCityDestinyOriginForm}
                    >
                      <AiOutlinePlusSquare size={32} color="white" /> Nueva
                      ciudad
                    </button>

                    {showNewCityDestinyForm && (
                      <FormNewCityDestiny
                        onHideForm={handleHideNewCityDestinyForm}
                        selectedCountryId={input.idCountry}
                      />
                    )}
                  </div>
                  
                  
                </div>
              </div>
              </TabPanel>

              <TabPanel>
              <div>
                <h2>Datos de vuelo</h2>
                <div>
                  <div className="mb-5">
                    <label
                      htmlFor="idAirline"
                      className="block mb-2 text-sm font-medium text-gray-600"
                    >
                      Aerolinea:
                    </label>
                    <select
                      name="idAirline"
                      id="idAirline"
                      value={input.idAirline}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option value="">Selecione una aerolinea </option>
                      {airlines.map((airline) => (
                        <option key={airline.id} value={airline.id}>
                          {airline.name}
                        </option>
                      ))}
                    </select>
                    <div>
                      <button
                        className="bg-green-400 rounded p-2 m-2 mt-3 px-3 py-2 text-white focus:outline-none"
                        onClick={handleShowNewAirlineForm}
                      >
                        <AiOutlinePlusSquare size={32} color="white" /> Nueva
                        aerolinea
                      </button>

                      {showNewAirlineForm && (
                        <FormNewAirline onHideForm={handleHideNewAirlineForm} />
                      )}

                      <label
                        htmlFor="outboundFlight"
                        className="block mb-2 text-sm font-medium text-gray-600"
                      >
                        Detalles del vuelo de ida:
                      </label>
                      <input
                        type="text"
                        name="outboundFlight"
                        id="outboundFlight"
                        placeholder="Vuelo de ida..."
                        value={input.outboundFlight}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      />

                      <label
                        htmlFor="returnFlight"
                        className="block mb-2 text-sm font-medium text-gray-600"
                      >
                        Detalles del vuelo de regreso:
                      </label>
                      <input
                        type="text"
                        name="returnFlight"
                        id="returnFlight"
                        placeholder="Vuelo de regreso..."
                        value={input.returnFlight}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  
                 
                </div>
              </div>
              </TabPanel>

              <TabPanel>
              <div>
                <h2>Alojamiento, servicios y actividades</h2>
                <div>
                  <div className="mb-5">
                    <label
                      htmlFor="idHotel"
                      className="block mb-2 text-sm font-medium text-gray-600"
                    >
                      Hotel:
                    </label>
                    <select
                      name="idHotel"
                      id="idHotel"
                      value={input.idHotel}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                      <option value="">Seleccione un Hotel</option>
                      {filteredHotels.map((hotel) => (
                        <option key={hotel.id} value={hotel.id}>
                          {hotel.name}
                        </option>
                      ))}
                    </select>
                    <div>
                      <button
                        className="bg-green-400 rounded p-2 m-2 mt-3 px-3 py-2 text-white focus:outline-none"
                        onClick={handleShowNewHotelForm}
                      >
                        <AiOutlinePlusSquare size={32} color="white" /> Nuevo
                        Hotel
                      </button>

                      {showNewHotelForm && (
                        <FormNewHoltel
                          onHideForm={handleHideNewHotelForm}
                          selectedCityId={input.idCity}
                        />
                      )}
                    </div>
                  </div>

                  <div className="mb-5">
                    <label
                      htmlFor="service"
                      className="block mb-2 text-sm font-medium text-gray-600"
                    >
                      Incluye:
                    </label>

                    <input
                      type="text"
                      name="service"
                      id="service"
                      placeholder="Servicios..."
                      value={input.service}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="activity">Actividades</label>
                    <button
                      className="bg-green-400 rounded p-2 m-2 mt-3 px-3 py-2 text-white focus:outline-none"
                      onClick={handleShowactivityForm}
                    >
                      <AiOutlinePlusSquare size={32} color="white" />
                    </button>
                    <div>{showActivityForm && <FormActivity />}</div>
                  </div>
                 
                  <div className="mb-5">
                    <button
                      onClick={handleSubmit}
                      type="submit"
                      className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none"
                    >
                      Crear
                    </button>
                  </div>
                </div>
              </div>
              </TabPanel>
         </Tabs>
        </div>
  );
};

export default Form;
