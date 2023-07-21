import axios from "axios";
import { normalize } from "normalize-diacritics";

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

export const searchPackages = (word) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:3002/packages?title=${word}`
      );
      const data = await response.data;
      console.log("searchPackages data:", data); // <-- add this line
      return dispatch({
        type: SEARCH_PACKAGES,
        payload: data,
      });
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

export const setCityFilter = (filter) => ({
  type: SET_CITY_FILTER,
  payload: filter,
});

export const setDurationFilter = (filter) => ({
  type: SET_DURATION_FILTER,
  payload: filter,
});

export const setPriceFilter = (filter) => ({
  type: SET_PRICE_FILTER,
  payload: filter,
});

export const setSearchFilter = (searchQuery) => (dispatch, getState) => {
  const { packagesList } = getState().packages;
  const filteredPackages = packagesList.filter((pkg) =>
    pkg.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  dispatch({ type: SET_SEARCH_FILTER, payload: filteredPackages });
};
