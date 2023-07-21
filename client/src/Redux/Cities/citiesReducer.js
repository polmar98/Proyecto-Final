import {
  FETCH_CITIES,
  ADD_CITY,
  GET_CITY_BY_ID,
  SEARCH_CITIES,
} from "./citiesActions";

const initialState = {
  citiesList: [],
  citiesSearch: [],
  citiesFiltered: [],
  cityDetails: {},
};

const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CITIES:
      return {
        ...state,
        citiesList: action.payload,
        citiesFiltered: action.payload,
      };
    case ADD_CITY:
      return {
        ...state,
      };
    case GET_CITY_BY_ID:
      return {
        ...state,
        cityDetails: action.payload,
      };
    case SEARCH_CITIES:
      return {
        ...state,
        citiesSearch: action.payload,
      };
    default:
      return state;
  }
};

export default citiesReducer;
