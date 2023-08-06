import axios from "axios";

// Acción para obtener todas las facturas desde el backend
export const fetchAllBills = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:3002/bill"); // Reemplaza "/api/statistics/packages" con la URL correcta de tu backend
    const bills = response.data;
    console.log(bills);
    dispatch({ type: "FETCH_ALL_BILLS_SUCCESS", payload: bills });
  } catch (error) {
    dispatch({ type: "FETCH_ALL_BILLS_FAILURE", payload: error.message });
  }
};
