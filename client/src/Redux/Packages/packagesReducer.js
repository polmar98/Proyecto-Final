import {
  FETCH_PACKAGES,
  ADD_PACKAGE,
  GET_PACKAGE_BY_ID,
  SEARCH_PACKAGES,
  CLEAR_PACKAGE_DETAILS,
  SET_CITY_FILTER,
  SET_DURATION_FILTER,
  SET_PRICE_FILTER,
  SET_SEARCH_FILTER,
} from "./packagesActions";

const initialState = {
  packagesList: [],
  packagesSearch: [],
  packagesFiltered: [],
  packageDetails: {},
  cityFilter: "",
  durationFilter: "Todos",
  priceFilter: "TodosPrecio",
};

const packagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PACKAGES:
      return {
        ...state,
        packagesList: action.payload,
        packagesFiltered: action.payload,
      };
    case ADD_PACKAGE:
      return {
        ...state,
      };
    case GET_PACKAGE_BY_ID:
      return {
        ...state,
        packageDetails: action.payload,
      };
    case SEARCH_PACKAGES:
      console.log("SEARCH_PACKAGES payload:", action.payload); // <-- add this line
      return {
        ...state,
        packagesSearch: action.payload,
      };

    case CLEAR_PACKAGE_DETAILS:
      return {
        ...state,
        packageDetails: {},
      };
    case SET_CITY_FILTER:
      return {
        ...state,
        cityFilter: action.payload,
        packagesFiltered: applyFilters(state, { cityFilter: action.payload }),
      };
    case SET_DURATION_FILTER:
      return {
        ...state,
        durationFilter: action.payload,
        packagesFiltered: applyFilters(state, {
          durationFilter: action.payload,
        }),
      };
    case SET_PRICE_FILTER:
      return {
        ...state,
        priceFilter: action.payload,
        packagesFiltered: applyFilters(state, { priceFilter: action.payload }),
      };
    case SET_SEARCH_FILTER:
      return {
        ...state,
        packagesFiltered: action.payload,
      };

    default:
      return state;
  }
};

function applyFilters(state, newFilters) {
  const filters = {
    ...state,
    ...newFilters,
  };

  let results = [...state.packagesList];

  if (filters.cityFilter) {
    results = results.filter(
      (packages) => packages.idCity === Number(filters.cityFilter)
    );
  }

  if (filters.durationFilter && filters.durationFilter !== "Todos") {
    if (filters.durationFilter === "Menor-Mayor") {
      results = [...results].sort((a, b) => a.duration - b.duration);
    } else if (filters.durationFilter === "Mayor-Menor") {
      results = [...results].sort((a, b) => b.duration - a.duration);
    }
  }

  if (filters.priceFilter && filters.priceFilter !== "TodosPrecio") {
    if (filters.priceFilter === "MenorPrecio") {
      results = [...results].sort((a, b) => a.standarPrice - b.standarPrice);
    } else if (filters.priceFilter === "MayorPrecio") {
      results = [...results].sort((a, b) => b.standarPrice - a.standarPrice);
    }
  }

  return results;
}

export default packagesReducer;
