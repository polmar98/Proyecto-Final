import axios from "axios";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_ONE_FROM_CART = "REMOVE_ONE_FROM_CART";
export const REMOVE_ALL_FROM_CART = "REMOVE_ALL_FROM_CART";
export const CLEAN_CART = "CLEAN_CART";
export const CHECKUSER_SHOPPING = "CHECKUSER_SHOPPING";
export const SAVE_ITEM_DB = "SAVE_ITEM_DB";
export const SET_ITEM = "SET_ITEM"

//agrega el item al estado global
export const add_to_cart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};

export const set_item = (idCart, item) => {
  return async (dispatch) => {
    try{
      await axios.put(`http://localhost:3002/shoppingCar/${idCart}`, {data:item})
      
      return dispatch({
        type: SET_ITEM,
        payload: item
      })
    } catch(error) {
      console.log(error.message)
    }
  }
}

//trae la info de X carrito
export const userShopping = (uid) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `http://localhost:3002/shoppingCar/user/${uid}`
      );
      const data = response.data;
      // console.log("esto es data de action:", data);
      return dispatch({
        type: CHECKUSER_SHOPPING,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

//elimina un item
export const remove_one_from_cart = (item) => {
  return async (dispatch) => {
    try {
      await axios.delete(
        `http://localhost:3002/shoppingCar/`, {item}
      )
      return dispatch({
        type: REMOVE_ONE_FROM_CART,
        payload: item,
      });
    }
    catch (error) {
      console.log(error)
    }
  }
};

//vacía el carrito
export const clean_cart = (idCart) => {
  return async (dispatch) => {
    try {
       await axios.delete(
      `http://localhost:3002/shoppingCar/${idCart}`
      );
      // const data = response.data;
      return dispatch({
        type: CLEAN_CART,
      });
    } catch (error) {
      console.log(error)
    }
  }
  
};
