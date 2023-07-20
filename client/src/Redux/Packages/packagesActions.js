import axios from "axios";
import { normalize } from "normalize-diacritics";

export const FETCH_PACKAGES = "FETCH_PACKAGES";
export const ADD_PACKAGE = "ADD_PACKAGE";
export const GET_PACKAGE_BY_ID = "GET_PACKAGE_BY_ID";
export const SEARCH_PACKAGES = "SEARCH_PACKAGES";

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
        "http://localhost:3002/packages?title=${word}"
      );
      const data = response.data;
      return dispatch({
        type: SEARCH_PACKAGES,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
