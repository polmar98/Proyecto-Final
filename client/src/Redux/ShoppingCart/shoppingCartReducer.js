import {
  ADD_TO_CART,
  REMOVE_ONE_FROM_CART,
  CLEAN_CART,
  CHECKUSER_SHOPPING,
  SET_ITEM,
} from "./shoppingCartActions";
// import { CHECKUSER_SHOPPING } from "../Users/usersActions";
// import { getAllPackages } from "../Selectors/cartSelectors";

const initialState = {
  cart: [],
  idCart: 0,
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // console.log("el reducer", action.payload);
      // const itemexists = state.cart.find((el) => el.idProduct === action.payload.idProduct);
      // if (itemexists) {
      //   return {
      //     ...state,
      //     cart: [
      //       ...state.cart,
      //       state.cart[itemexists]= {...itemexists, amount: action.payload.amount + 1 }
      //     ],
      //   };
      // }
      return {
        ...state,
        cart: [...state.cart, action.payload.ItemsShoppingCars],
        idCart: action.payload.car.id,
      };

    case SET_ITEM:
        state.cart?.forEach((el) => {
          if (el.productId === action.payload.productId)
            el.amount = action.payload.amount;
          console.log("Que cosa:", el);
  
          console.log("Que cosa?:", action.payload.amount);
          el.totalPrice = el.unitPrice * el.amount;
        });
      
      return {
        ...state,
        cart: [...state.cart],
      };

    case REMOVE_ONE_FROM_CART:
      let deleteOne = state.cart.filter(
        (el) => el.idProduct !== action.payload.idProduct
      );
      return {
        ...state,
        cart: [...deleteOne],
      };

    case CLEAN_CART:
      return {
        ...state,
        cart: [],
      };
    case CHECKUSER_SHOPPING:
      return {
        ...state,
        idCart: action.payload.car.id,
        cart: action.payload.car.ItemsShoppingCars,
      };

    default:
      return state;
  }
};

export default shoppingCartReducer;
