const axios = require("axios");
const {
  PAYPAL_API,
  PAYPAL_API_CLIENT,
  PAYPAL_API_SECRET,
} = require("../payPalConfig");

const createOrder = async (order) => {

   const params = new URLSearchParams();
   params.append("grant_type", "client_credentials")
   const token = await axios.post("https://api-m.sandbox.paypal.com/v1/oauth2/token", params, {
      headers: {
         "Content-Type": "applicaction/x-www-form-urlencoded"
      },
      auth:{
         username:PAYPAL_API_CLIENT,
         password:PAYPAL_API_SECRET,
      }
   } )
   const {access_token} = token.data;
  const response = await axios.post(`${PAYPAL_API}/v2/checkout/orders`, order, {
    headers: {
      authorization: `Bearer ${access_token} `,
    },
  });
  return response.data;
};

const payOrder = async () => {
  return "paid order";
};

const cancelOrder = async () => {
  return "canceled order";
};

module.exports = {
  createOrder,
  payOrder,
  cancelOrder,
};
