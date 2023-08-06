import axios from "axios";
export const FETCH_BILLS_REQUEST = 'FETCH_BILLS_REQUEST';



// Acción para obtener las facturas desde la base de datos
export const fetchBills = () => {
  return async (dispatch) => {
    try {

      const response = await axios.get("http://localhost:3002/bill");
      const data = await response.data;
      return dispatch({
        type: FETCH_BILLS_REQUEST,
        payload: data
      })


    } catch (error) {
      
      console.log(error)
    }
  };
};

