const { Router } = require('express');
const {addBill, getBillById, getAllBill} = require("../controllers/billControllers");

const router = Router();

//esta ruta permite crear una factura nueva a partir de la info del carrito suministrado por id
router.post('/:id', async(req, res) => {
   const {id} = req.params;
   try {
       const result = await addBill(id);
       res.status(200).json(result);
   } catch (error) {
       res.status(500).json({message: error.message});
   };
});

//esta ruta devuelve todas las facturas
router.get('/', async(req, res) => {
    try {
        const result = await getAllBill();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
 });

//esta ruta busca una factura por su ID
router.get('/:id', async(req, res) => {
   const {id} = req.params;
   try {
       const result = await getBillById(id);
       res.status(200).json(result);
   } catch (error) {
       res.status(500).json({message: error.message});
   }
});



module.exports = router;