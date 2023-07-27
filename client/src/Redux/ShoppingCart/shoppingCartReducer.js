import {
  ADD_TO_CART,
  REMOVE_ONE_FROM_CART,
  CLEAN_CART,
  CHECKUSER_SHOPPING,
} from "./shoppingCartActions";
// import { CHECKUSER_SHOPPING } from "../Users/usersActions";
// import { getAllPackages } from "../Selectors/cartSelectors";

const initialState = {
  products: [],
  cart: [],
  idCart: 0,
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    // case NEW_CART:
    //   return {
    //     ...state,
    //     idCart: action.payload.cart.idcar,
    //   };
    case ADD_TO_CART:
      // console.log('el reducer', action.payload)
      // const itemexists = state.cart.find((el) => el.id === action.payload.id);
      // if (itemexists) {
      //   return {
      //     ...state,
      //     cart: [
      //       ...state.cart,
      //       { ...itemexists, amount: itemexists.amount + 1 },
      //     ],
      //   };
      // }
      return {
        ...state,
        cart: [...state.cart, action.payload.ItemsShoppingCars],
        idCart: action.payload.id,
      };

    case REMOVE_ONE_FROM_CART:
      let deleteOne = state.cart.filter((el) => el.idProduct !== action.payload.idProduct);
      return {
        ...state,
        cart: [deleteOne],
      };

    case CLEAN_CART:
      return {
        ...state,
        cart: [],
      };
    case CHECKUSER_SHOPPING:
      return {
        ...state,
        idCart: action.payload.id,
        cart: action.payload.ItemsShoppingCars,
      };

    default:
      return state;
  }
};

export default shoppingCartReducer;
