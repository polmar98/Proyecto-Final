import axios from "axios";
// import { get } from "../../../../Back/src/handlers/paymentHandlers";

export const GET_PAY_INFO = "GET_PAY_INFO"
export const CREATE_ORDER = "CREATE_ORDER";
export const GET_PAYMENT_DETAIL = "GET_PAYMENT_DETAIL";


export const get_pay_info = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3002/payment/payment-details")
      const data = response.data
      console.log('la data', data)

      return dispatch({
        type: GET_PAY_INFO,
        payload: data
      })
      
    } catch (error) {
      console.log(error.message)
    }
  }
}

export const create_order = (order) => {
  // console.log('order en action', order)
 
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3002/payment/create-order",
        order
      );
      const paymentLink = response.data;
      
      // const link = paymentLink.split('=')
      // const token = link[1].toString()

      // console.log('el link de paypal', paymentLink)

      window.location.href = paymentLink;
      
     

      // window.location.href = ("http://localhost:3000/home")

      return dispatch({
        type: CREATE_ORDER,
        payload: paymentLink,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};


