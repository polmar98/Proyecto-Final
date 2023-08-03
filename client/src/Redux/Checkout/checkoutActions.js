import axios from "axios";

export const CREATE_ORDER = "CREATE_ORDER";
export const GET_PAYMENT_DETAIL = "GET_PAYMENT_DETAIL";


export const create_order = (order) => {
 
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3002/payment/create-order",
        order
      );
      const paymentLink = response.data;
            let token = paymentLink.split("=");
      console.log(token);
      window.location.href = paymentLink;
      
    } catch (error) {
      console.log(error.message);
    }
  };
};


