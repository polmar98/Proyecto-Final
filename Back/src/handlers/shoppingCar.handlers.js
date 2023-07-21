const { Router } = require('express');
const {addShoppingCar} = require('../controllers/shoppingCar.controllers');

const router = Router();

router.post('/', async(req, res) => {
   const carrito = req.body; 
   try {
       const result = addShoppingCar(carrito);
       res.status(200).send("Carrito Almacenado");
   } catch (error) {
       res.status(500).json({message: error.message});
   }
});

module.exports = router;