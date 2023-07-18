import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SearchBar from "../Components/SearchBar";
import Card from "../Components/CardPackageSearch";
import { useDispatch } from "react-redux";
import { fetchPackages } from "../Redux/packagesSlice";
import { useLocation } from "react-router-dom";
import { searchPackagesAsync } from "../Redux/packagesSlice";
import Footer from "../Components/Footer";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const RESULTS_PER_PAGE = 3;

export default function SearchResult() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const loadData = async () => {
      await dispatch(fetchPackages());
      const searchQuery = new URLSearchParams(location.search).get("title");
      if (searchQuery) {
        dispatch(searchPackagesAsync(searchQuery));
      }
    };
    loadData();
  }, [dispatch, location.search]);

  const searchResults = useSelector((state) => state.search.searchResults);
  const packagesList = useSelector((state) => state.packages.packagesList);

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

  return (
    <div className="pt-8">
      <SearchBar />
      <div className="pt-10">
        {currentResults.map((tour) => (
          <Card key={tour.id} {...tour} />
        ))}
      </div>

      <div className="flex justify-center mt-4">
        {/* Botones de paginación */}
        <div className="flex items-center">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="bg-green-300 rounded p-2 m-2"
          >
            <FiChevronLeft style={{ fontSize: "20px", color: "white" }} />
          </button>
          <p className="">
            Page {currentPage} of {totalPages}
          </p>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="bg-green-300 rounded p-2 m-2"
          >
            <FiChevronRight style={{ fontSize: "20px", color: "white" }} />
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
