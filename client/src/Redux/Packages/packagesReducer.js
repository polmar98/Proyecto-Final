import {
  FETCH_PACKAGES,
  ADD_PACKAGE,
  GET_PACKAGE_BY_ID,
  SEARCH_PACKAGES,
  CLEAR_PACKAGE_DETAILS,
} from "./packagesActions";

const initialState = {
  packagesList: [],
  packagesSearch: [],
  packagesFiltered: [],
  packageDetails: {},
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
      return {
        ...state,
        packagesSearch: action.payload,
      };
    case CLEAR_PACKAGE_DETAILS:
      return {
        ...state,
        packageDetails: {},
      };

    default:
      return state;
  }
};

export default packagesReducer;
