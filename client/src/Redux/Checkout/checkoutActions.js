import axios from "axios";

export const CREATE_ORDER = "CREATE_ORDER";

export const create_order = (order) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3002/payment/create-order",
        order
      );
      const paymentLink = response.data;
      window.location.href = paymentLink;

      return dispatch({
        type: CREATE_ORDER,
        payload: paymentLink,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
