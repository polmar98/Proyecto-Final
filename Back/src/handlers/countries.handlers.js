const { Router } = require('express');


const router = Router();

router.post('/', async(req, res) => {
   
   try {
       
       res.send("crea un nuevo país")  
   } catch (error) {
       res.status(500).json({message: error.message});
   }
});

router.get('/', async(req, res) => {
    
    try {
        res.send("trae todos los países")
    } catch (error) {
        res.status(500).json({message: error.message});  
    }
})

router.get('/:id', async(req, res) => {
    
    try {
        res.send("trae el país solicitado por id")
    } catch (error) {
        res.status(500).json({message: error.message});  
    }
})

router.get('/name?=', async(req, res) => {
    
    try {
        res.send("trae el país solicitado por name")
    } catch (error) {
        res.status(500).json({message: error.message});  
    }
})

router.delete('/:id', async(req, res) => {
    
    try {
        res.send("borra el continente solicitado por id")
    } catch (error) {
        res.status(500).json({message: error.message});  
    }
})

module.exports = router;