import {
  ADD_TO_CART,
  REMOVE_ONE_FROM_CART,
  CLEAN_CART,
} from "./shoppingCartActions";
import { NEW_CART } from "../Users/usersActions";
// import { getAllPackages } from "../Selectors/cartSelectors";

const initialState = {
  products: [],
  cart: [],
  idCart: 0,
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_CART:
      return {
        ...state,
        idCart: action.payload.cart.idcar,
      };
    case ADD_TO_CART:
      // console.log('el reducer', action.payload)
      const itemexists = state.cart.find((el) => el.id === action.payload.id);
      if (itemexists) {
        return {
          ...state,
          cart: [
            ...state.cart,
            { ...itemexists, amount: itemexists.amount + 1 },
          ],
        };
      }
      return {
        ...state,
        cart: [...state.cart, action.payload],
        idCart: action.payload.cart.id,
      };

    case REMOVE_ONE_FROM_CART:
      let deleteOne = state.cart.filter((el) => el.id !== action.payload);
      return {
        ...state,
        cart: [deleteOne],
      };

    case CLEAN_CART:
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};

export default shoppingCartReducer;
