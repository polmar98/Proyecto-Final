const { Router } = require("express");
const {
  createOrder,
  captureOrder,
} = require("../controllers/paymentControllers");

const router = Router();

router.post("/create-order", async (req, res) => {
  try {
    const order = req.body;
    const result = await createOrder(order);

    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/pay-order", async (req, res) => {
  try {
    const { token } = req.query;
    const result = await captureOrder(token);    ;
    res.status(200).redirect("http://localhost:3000/home");    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/cancel-order", async (req, res) => {
  try {
    //revisar la ruta para que redireccione al carrito
    res.redirect("http://localhost:3000/shoppingCart");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
