import {
  FETCH_BILLS_REQUEST,
} from './dashboardAction';

const initialState = {
  bills: [],
  loading: false,
  error: null,
};

const billReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BILLS_REQUEST:
      return {
        ...state,
        bills:action.payload,
        loading: true,
        error: null,
      };
    default:
      return state;
  }
};

export default billReducer;


