import axios from "axios";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_ONE_FROM_CART = "REMOVE_ONE_FROM_CART";
export const REMOVE_ALL_FROM_CART = "REMOVE_ALL_FROM_CART";
export const CLEAN_CART = "CLEAN_CART";
export const CHECKUSER_SHOPPING = "CHECKUSER_SHOPPING";

export const add_to_cart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};
export const userShopping = (uid) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:3002/shoppingCar/user/${uid}`
      );
      const data = response.data;
      console.log("esto es data de action:", data);
      return dispatch({
        type: CHECKUSER_SHOPPING,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const remove_one_from_cart = (id) => {
  return {
    type: REMOVE_ONE_FROM_CART,
    payload: id,
  };
};

export const clean_cart = () => {
  return {
    type: CLEAN_CART,
  };
};
