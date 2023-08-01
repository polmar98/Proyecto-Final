const { Router } = require('express');
const { createOrder, captureOrder, cancelOrder} = require ("../controllers/paymentControllers");

const router = Router();



router.post('/create-order', async (req, res)=>{
    try{

        //json de prueba para una orden
        const order = {
            intent: "CAPTURE",
            purchase_units: [
                {
                    amount: {
                        currency_code: "USD",
                        value: "9.99",
                    },
                    description: "paquete a cancún"
                }
            ],
            application_context: {
                brand_name: "wanderlust.com",
                landing_page: "LOGIN",
                user_action: "PAY_NOW",
                return_url:"http://localhost:3002/payment/pay-order",
                cancel_url: "http://localhost:3002/payment/cancel-order"
            }
        };

        // const { order } = req.body; descomentar luego de hacer pruebas con el json order
        const result = await createOrder(order);
       res.status(200).json(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/pay-order', async (req, res)=>{
    try{
        const { token } = req.query;

        console.log(token);
        const result = await captureOrder(token);
       res.status(200).json(result)
    }
    catch(error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/cancel-order', async (req, res)=>{
    try{
        //revisar la ruta para que redireccione al carrito 
        res.redirect("/shoppingCar");

    }catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;