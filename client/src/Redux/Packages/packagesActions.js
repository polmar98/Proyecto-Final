import axios from "axios";
import diacritics from "diacritics"

export const FETCH_PACKAGES = "FETCH_PACKAGES";
export const ADD_PACKAGE = "ADD_PACKAGE";
export const GET_PACKAGE_BY_ID = "GET_PACKAGE_BY_ID";
export const SEARCH_PACKAGES = "SEARCH_PACKAGES";
export const CLEAR_PACKAGE_DETAILS = "CLEAR_PACKAGE_DETAILS";
export const SET_CITY_FILTER = "SET_CITY_FILTER";
export const SET_DURATION_FILTER = "SET_DURATION_FILTER";
export const SET_PRICE_FILTER = "SET_PRICE_FILTER";
export const SET_SEARCH_FILTER = "SET_SEARCH_FILTER";



export const fetchPackages = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3002/packages");
      const data = response.data;
      return dispatch({
        type: FETCH_PACKAGES,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addPackages = (newPackage) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3002/packages",
        newPackage
      );
      const data = response.data;
      return dispatch({
        type: ADD_PACKAGE,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getPackageById = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3002/packages/${id}`);
      const data = response.data;
      return dispatch({
        type: GET_PACKAGE_BY_ID,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const SearchPackagesByCountry = (country) => {
  return async (dispatch, getState) => {
    try {
      const { packagesList } = getState().packages;
      const searchQuery = diacritics.remove(country.toLowerCase());

      // Realizar la búsqueda local por país
      const searchResult = packagesList.filter(
        (pkg) =>
          diacritics.remove(pkg.Country.name.toLowerCase()).includes(
            searchQuery
          )
      );

      // Si hay una consulta de búsqueda, actualizamos los resultados de búsqueda
      if (searchQuery) {
        dispatch({
          type: SEARCH_PACKAGES,
          payload: searchResult,
        });
      } else {
        // Si no hay consulta de búsqueda, restablecemos los resultados de búsqueda a un array vacío
        dispatch({
          type: SEARCH_PACKAGES,
          payload: [],
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
  


export const clearPackageDetails = () => {
  return {
    type: CLEAR_PACKAGE_DETAILS,
  };
};

export const FilterPackagesByCity = (payload) => {
  return {
    type: SET_CITY_FILTER,
    payload
  };
};

 
export const setDurationFilter = (payload) => ({
  type: SET_DURATION_FILTER,
  payload,
});


export const setPriceFilter = (payload) => ({
  type: SET_PRICE_FILTER,
  payload,
});

