import axios from "axios";

export const SEND_EMAIL = "SEND_EMAIL";
export const SEND_EMAIL_SUCCESS = "SEND_EMAIL_SUCCESS";
export const SEND_EMAIL_ERROR = "SEND_EMAIL_ERROR";

export const startSendEmail = (name, email, phone, message) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:3002/contacto/", {
        name,
        email,
        phone,
        message,
      });
      const data = response.data;
      return dispatch({
        type: SEND_EMAIL,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const sendEmailSuccess = () => {
  return {
    type: SEND_EMAIL_SUCCESS,
  };
};

export const sendEmailError = () => {
  return {
    type: SEND_EMAIL_ERROR,
  };
};
