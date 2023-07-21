import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SearchBar from "../Components/SearchBar";
import Card from "../Components/CardPackageSearch";
import { useDispatch } from "react-redux";
import {
  fetchPackages,
  searchPackages,
  setCityFilter,
  setDurationFilter,
  setPriceFilter,
} from "../Redux/Packages/packagesActions";
import { useLocation } from "react-router-dom";
import Footer from "../Components/Footer";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { fetchCities } from "../Redux/Cities/citiesActions";

const RESULTS_PER_PAGE = 3;

export default function SearchResult() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);

  const searchResults = useSelector((state) => state.packages.packagesFiltered);
  const cities = useSelector((state) => state.cities.citiesList);

  useEffect(() => {
    const loadData = async () => {
      await dispatch(fetchPackages());
      const searchQuery = new URLSearchParams(location.search).get("title");
      if (searchQuery) {
        dispatch(searchPackages(searchQuery));
      }
    };
    loadData();
  }, [dispatch, location.search]);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchCities());
  }, [dispatch]);

  const handleCityFilterChange = (e) => {
    dispatch(setCityFilter(e.target.value));
  };

  const handleDurationFilterChange = (e) => {
    dispatch(setDurationFilter(e.target.value));
  };

  const handlePriceFilterChange = (e) => {
    dispatch(setPriceFilter(e.target.value));
  };

  const searchResults1 = useSelector((state) => state.packages.packagesSearch);
  const packagesList = useSelector((state) => state.packages.packagesList);

  // Calcular la cantidad total de páginas disponibles
  const totalPages = Math.ceil(
    searchResults1.length > 0
      ? searchResults1.length / RESULTS_PER_PAGE
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

  return (
    <div className="pt-8">
      <div className="flex items-center justify-center">
        <div className="mx-auto">
          <SearchBar />
        </div>
      </div>

      <div className="flex justify-evenly p-4">
        <div className="flex flex-col border border-gray-200 rounded-lg shadow-sm p-2">
          <h2 className="font-semibold text-lg mb-2">Ciudad de destino:</h2>
          <select className="rounded p-1" onChange={handleCityFilterChange}>
            <option value="">Todos</option>
            {cities.map((city) => {
              return (
                <option key={city.id} value={city.id}>
                  {city.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex flex-col border border-gray-200 rounded-lg shadow-sm p-2">
          <h2 className="font-semibold text-lg mb-2">Duración:</h2>
          <select className="rounded p-1" onChange={handleDurationFilterChange}>
            <option value="">Todos</option>
            <option value="Menor-Mayor">Menor-Mayor</option>
            <option value="Mayor-Menor">Mayor-Menor</option>
          </select>
        </div>
        <div className="flex flex-col border border-gray-200 rounded-lg shadow-sm p-2">
          <h2 className="font-semibold text-lg mb-2">Precio:</h2>
          <select className="rounded p-1" onChange={handlePriceFilterChange}>
            <option value="">Todos</option>
            <option value="MenorPrecio">Menor</option>
            <option value="MayorPrecio">Mayor</option>
          </select>
        </div>
      </div>

      <div className="pt-10">
        {currentResults.map((tour) => (
          <Card key={tour.id} {...tour} />
        ))}
      </div>

      {/* Número de la página actual */}
      <div className="flex justify-center  items-center font-bold mt-4">
        {/* Botones de paginación */}
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className=" bg-green-300 rounded p-2 m-2"
        >
          <FiChevronLeft style={{ fontSize: "20px", color: "white" }} />
        </button>

        <p className="mr-4">
          Page {currentPage} of {totalPages}
        </p>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className=" bg-green-300 rounded p-2 m-2"
        >
          <FiChevronRight style={{ fontSize: "20px", color: "white" }} />
        </button>
      </div>
      <Footer />
    </div>
  );
}
