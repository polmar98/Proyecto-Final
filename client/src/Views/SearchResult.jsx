import React from "react";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "../Components/SearchBar";
import Card from "../Components/CardPackageSearch";
import NavBar from "../Components/NavBar";
import { FaSync } from "react-icons/fa";
import {
  fetchPackages,
  SearchPackagesByCountry,
  FilterPackagesByCity,
  setDurationFilter,
  setPriceFilter,
  clearSearchView,
  setPriceRangeFilter,
  setClearPriceRangeFilter,
  FilterPackagesByOriginCity,
  fetchOriginCities,
  reset,
} from "../Redux/Packages/packagesActions";
import { useLocation } from "react-router-dom";
import Footer from "../Components/Footer";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { fetchCities } from "../Redux/Cities/citiesActions";
import { fetchCountries } from "../Redux/Country/countriesActions";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";


const RESULTS_PER_PAGE = 3;

function normalizeString(str) {
  return str
    .normalize("NFD") // Normalizar la cadena para separar los caracteres diacríticos
    .replace(/[\u0300-\u036f]/g, "") // Eliminar los caracteres diacríticos
    .toLowerCase(); // Convertir a minúsculas
}

export default function SearchResult() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);

  const searchResults = useSelector((state) => state.packages.packagesSearch); // Renombrado packagesSearch a searchResults
  const packagesList = useSelector((state) => state.packages.packagesList);
  const cities = useSelector((state) => state.cities.citiesList);
  const searchQuery = new URLSearchParams(location.search).get("Country");
  // const filters = useSelector((state) => state.packages.filters);
  const countries = useSelector((state) => state.countries.countriesList);
  const [searchedCountry, setSearchedCountry] = useState(
    searchQuery ? normalizeString(searchQuery) : ""
  );

  const originCities = useSelector((state) => state.packages.originCitiesList);

  useEffect(() => {
    setSearchedCountry(searchQuery ? normalizeString(searchQuery) : "");
  }, [searchQuery]);

  useEffect(() => {
    const loadData = async () => {
      await dispatch(fetchPackages());
      if (searchQuery) {
        dispatch(SearchPackagesByCountry(searchQuery));
      }
    };
    loadData();

    return () => {
      dispatch(clearSearchView(true)); // Aquí despachamos la acción con "true" al desmontar
    };
  }, [dispatch, searchQuery]);

  useEffect(() => {
    dispatch(fetchCountries());
    dispatch(fetchOriginCities());
  }, [dispatch]);

  const filteredCities = searchedCountry
    ? cities.filter((city) => {
        const country = countries.find(
          (country) => normalizeString(country.name) === searchedCountry
        );
        return country && city.idCountry === country.id;
      })
    : cities;

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchCities());
  }, [dispatch]);

  function handleFilterByCity(e) {
    dispatch(FilterPackagesByCity(e.target.value));
    setCurrentPage(1);
  }

  function handleFilterByOriginCity(e) {
    dispatch(FilterPackagesByOriginCity(e.target.value));
    setCurrentPage(1);
  }

  const handleDurationFilterChange = (e) => {
    dispatch(setDurationFilter(e.target.value));
  };

  const handlePriceFilterChange = (e) => {
    const selectedValue = e.target.value;
    dispatch(setPriceFilter(selectedValue));
  };

  const minPrice = 0.0;
  const maxPrice = 10000.0;
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);

  const handlePriceRangeFilter = (selectedPriceRange) => {
    setPriceRange(selectedPriceRange);

    if (
      selectedPriceRange[0] === minPrice &&
      selectedPriceRange[1] === maxPrice
    ) {
      dispatch(setClearPriceRangeFilter()); // Despachar la acción para eliminar el filtro
    } else {
      dispatch(setPriceRangeFilter(selectedPriceRange)); // Despachar la acción con el nuevo valor del rango de precios
    }
  };

  // Calcular la cantidad total de páginas disponibles
  const totalPages = Math.ceil(
    searchResults.length > 0
      ? searchResults.length / RESULTS_PER_PAGE
      : packagesList.length / RESULTS_PER_PAGE
  );

  // Función para manejar el botón "next"
  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  // Función para manejar el botón "previous"
  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  // Filtrar los resultados según la página actual
  const startIndex = (currentPage - 1) * RESULTS_PER_PAGE;
  const endIndex = startIndex + RESULTS_PER_PAGE;
  const currentResults =
    searchResults.length > 0
      ? searchResults.slice(startIndex, endIndex)
      : packagesList.slice(startIndex, endIndex);

  useEffect(() => {
    dispatch(FilterPackagesByCity("Todos"));
    dispatch(setDurationFilter("Todos"));
    dispatch(setPriceFilter("precios"));
    dispatch(setClearPriceRangeFilter());
    dispatch(FilterPackagesByOriginCity("Todos"));
  }, [dispatch]);

  function handleReset() {
    dispatch(reset());
    dispatch(setClearPriceRangeFilter());
    setPriceRange([minPrice, maxPrice]);
  }

  return (
    <div className="pt-0">
      <div className="bg-verdeFooter">
        <NavBar />
      </div>
      <div className="items-center flex justify-center mt-16 mb-8 ">
          <SearchBar />
        </div>
      <div className="justify-center flex-col grid grid-cols-4 gap-4 p-2 items-start ml-3 mr-20 ">
       
        <div className=" flex justify-evenly p-4 w-48 col-span-1 mr-4 flex-col border border-gray-200 rounded-lg bg-verdeFooter">
        <div>
            <button className="bg-green-400 rounded p-2 m-2 fontPoppins text-sm ">
              <FaSync
                style={{ fontSize: "20px", color: "white" }}
                onClick={handleReset}
              />
            </button>
          </div>

          <div className="flex flex-col border border-gray-200 rounded-lg shadow-sm p-2 bg-white mb-2">
            <h2 className="font-semibold mb-2 fontPoppins text-sm">
              Ciudad de destino:
            </h2>
            <select
              className="rounded p-1 fontPoppins text-sm"
              onChange={handleFilterByCity}
            >
              <option value="">Todos</option>
              {filteredCities.map((city) => {
                return (
                  <option key={city.id} value={city.name}>
                    {city.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="flex flex-col border border-gray-200 rounded-lg shadow-sm p-2  bg-white mb-2">
            <h2 className="font-semibold  mb-2 fontPoppins text-sm">
              Ciudad de salida:
            </h2>
            <select
              className="rounded p-1 fontPoppins text-sm"
              onChange={handleFilterByOriginCity}
            >
              <option value="">Todos</option>
              {originCities.map((city) => {
                return (
                  <option key={city.id} value={city.name}>
                    {city.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="flex flex-col border border-gray-200 rounded-lg shadow-sm p-2  bg-white mb-2">
            <h2 className="fontPoppins text-sm font-semibold">Presupuesto:</h2>
            <Slider
              range
              min={minPrice}
              max={maxPrice}
              value={priceRange}
              onChange={handlePriceRangeFilter}
              className="fontPoppins text-sm"
            />
            <div className="fontPoppins text-sm font-semibold">
              Precio mínimo USD: ${priceRange[0]}
            </div>
            <div className="fontPoppins text-sm font-semibold">
              Precio máximo USD: ${priceRange[1]}
            </div>
          </div>

          <div className=" mb-2 flex flex-col border border-gray-200 rounded-lg shadow-sm p-2 fontPoppins  bg-white">
            <h2 className="font-semibold text-sm mb-2 fontPoppins">
              Duración:
            </h2>
            <select
              className="rounded p-1 fontPoppins text-sm"
              onChange={handleDurationFilterChange}
            >
              <option value="Todos">---</option>
              <option value="Menor-Mayor">Mayor-Menor</option>
              <option value="Mayor-Menor">Menor-Mayor</option>
            </select>
          </div>

          <div className=" mb-2 flex flex-col border border-gray-200 rounded-lg shadow-sm p-2 fontPoppins  bg-white">
            <h2 className="font-semibold text-sm mb-2 fontPoppins">Precio:</h2>

            <select
              className="rounded p-1 fontPoppins text-sm"
              onChange={handlePriceFilterChange}
            >
              <option value="precios">---</option>
              <option value="MenorPrecio">Mayor</option>
              <option value="MayorPrecio">Menor</option>
            </select>
          </div>

          
          
      </div>
      <div className="flex flex-col col-span-3">
          {currentResults.map((tour) => (
            <Card key={tour.id} {...tour}/>
          ))}
        </div>

        </div>

        

      {/* Número de la página actual */}
      <div className="flex justify-center  items-center font-bold mt-4">
        {/* Botones de paginación */}
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className=" bg-green-400 rounded p-2 m-2"
        >
          <FiChevronLeft style={{ fontSize: "20px", color: "white" }} />
        </button>

        <p className="mr-4 fontPoppins text-sm">
          Pagina {currentPage} de {totalPages}
        </p>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className=" bg-green-400 rounded p-2 m-2 fontPoppins"
        >
          <FiChevronRight style={{ fontSize: "20px", color: "white" }} />
        </button>
      </div>
      <Footer />
    </div>
  );
}
