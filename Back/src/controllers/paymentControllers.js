const axios = require("axios");
const {
  PAYPAL_API,
  PAYPAL_API_CLIENT,
  PAYPAL_API_SECRET,
} = require("../payPalConfig");


const createOrder = async (order) => {
  //función requerida para solicitar token de paypal
  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");
  const access = await axios.post(
    "https://api-m.sandbox.paypal.com/v1/oauth2/token",
    params,
    {
      headers: {
        "Content-Type": "applicaction/x-www-form-urlencoded",
      },
      auth: {
        username: PAYPAL_API_CLIENT,
        password: PAYPAL_API_SECRET,
      },
    }
  );

  const { access_token } = access.data;

  // Acá enviamos la orden de compra a paypal
  const response = await axios.post(`${PAYPAL_API}/v2/checkout/orders`, order, {
    headers: {
      authorization: `Bearer ${access_token} `,
    },
  });
  return response.data;
};

const captureOrder = async (token) => {
  //función requerida para solicitar token de paypal
  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");
  const access = await axios.post(
    "https://api-m.sandbox.paypal.com/v1/oauth2/token",
    params,
    {
      headers: {
        "Content-Type": "applicaction/x-www-form-urlencoded",
      },
      auth: {
        username: PAYPAL_API_CLIENT,
        password: PAYPAL_API_SECRET,
      },
    }
  );

  const { access_token } = access.data;

  //Acá pedimos la captura de la orden a paypal
  const response = await axios.post(
    `${PAYPAL_API}/v2/checkout/orders/${token}/capture`,
    {},
    {
      headers: {
        authorization: `Bearer ${access_token} `,
      },
    }
  );
  //acá hay que redireccionar a alguna vista que diga ya estas listo para viajar
  
  const {id, status} = response.data;
  const cleanData = {id, status};

  console.log(cleanData);
  return (cleanData) ;
};

module.exports = {
  createOrder,
  captureOrder,
};
