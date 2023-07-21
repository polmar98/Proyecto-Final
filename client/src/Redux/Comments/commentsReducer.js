import {
  FETCH_COMENTS,
  ADD_COMENT,
  GET_COMENT_BY_ID,
  SEARCH_COMENTS,
} from "./commentsActions";

const initialState = {
  comentsList: [],
  comentsSearch: [],
  comentsFiltered: [],
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMENTS:
      return {
        ...state,
        comentsList: action.payload,
        comentsFiltered: action.payload,
      };
    case ADD_COMENT:
      return {
        ...state,
      };
    case GET_COMENT_BY_ID:
      return {
        ...state,
        comentsDetails: action.payload,
      };
    case SEARCH_COMENTS:
      return {
        ...state,
        comentsSearch: action.payload,
      };
    default:
      return state;
  }
};

export default commentsReducer;
