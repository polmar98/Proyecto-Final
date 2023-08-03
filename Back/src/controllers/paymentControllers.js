const axios = require("axios");
const { PaymentDetail } = require("../database");
const { Association } = require("../database");
const {
  PAYPAL_API,
  PAYPAL_API_CLIENT,
  PAYPAL_API_SECRET,
} = require("../payPalConfig");
const { DataTypes } = require("sequelize");

const createPaymentDetails = async (idUser, idTransaction, status) => {
  try {
    await PaymentDetail.findOrCreate({
      where: { idUser, idTransaction, status },
    });
  } catch (error) {
    console.log(error.message);
  }
};

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

  const payPalUrl = response.data.links[1].href;
  return payPalUrl;
};

const captureOrder = async (token, idUser) => {
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
  const { id, status } = response.data;
  const idTransaction = id;

  createPaymentDetails(idUser, idTransaction, status);
};

const getDetails = async () => {
  const dbPaymentDetails = await PaymentDetail.findAll();
  return dbPaymentDetails;
};

module.exports = {
  createOrder,
  captureOrder,
  getDetails,
};
