const { Router } = require('express');


const router = Router();

router.post('/', async(req, res) => {
   
   try {
       
       res.send("crea una nueva ciudad")  
   } catch (error) {
       res.status(500).json({message: error.message});
   }
});

router.get('/', async(req, res) => {
    
    try {
        res.send("trae todas las ciudades")
    } catch (error) {
        res.status(500).json({message: error.message});  
    }
})

router.get('/:id', async(req, res) => {
    
    try {
        res.send("trae la ciudad solicitada por id")
    } catch (error) {
        res.status(500).json({message: error.message});  
    }
})

router.get('/name?=', async(req, res) => {
    
    try {
        res.send("trae la ciudad solicitada por name")
    } catch (error) {
        res.status(500).json({message: error.message});  
    }
})

router.delete('/:id', async(req, res) => {
    
    try {
        res.send("borra borra la ciudad solicitada por id")
    } catch (error) {
        res.status(500).json({message: error.message});  
    }
})

module.exports = router;