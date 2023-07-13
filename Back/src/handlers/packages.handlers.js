const { Router } = require('express');
const {addPackages, viewPackages} = require('../controllers/packages.controllers');
const router = Router();

router.get('/', async(req, res) => {
   try {
       const result = await viewPackages();
       res.status(200).json(result);
   } catch (error) {
       res.status(500).json({message: error.message});
   } 

});

module.exports = router;