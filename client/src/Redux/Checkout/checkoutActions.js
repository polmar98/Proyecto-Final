import axios from "axios";

export const POST_BILL = "POST_BILL"
export const CREATE_ORDER = "CREATE_ORDER";

//crear la factura
export const post_bill= (datos) => {
  // console.log('el idCart en action', datos)
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:3002/bill/", datos)
      const data = response.data
      console.log('la factura', data)

      return dispatch({
        type: POST_BILL,
        payload: data
      })
      
    } catch (error) {
      console.log(error.message)
    }
  }
}


//crea la orden de pago
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


