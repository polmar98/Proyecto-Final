const { Router } = require('express');
const {addPackages,
      viewPackages,
      getPackageById,
      searchPackages,
      addMassivePackages} = require('../controllers/packagesControllers');
const router = Router();

//handler para busqueda de paquetes. si se agrega un query de busqueda ejecuta searchPackages
router.get('/', async(req, res) => {
   const search = req.query.title;
   try {
       if(!search) {
           const result = await viewPackages();
           res.status(200).json(result);
       } else {
           const result = await searchPackages(search);
           res.status(200).json(result);
       };
      
   } catch (error) {
       res.status(500).json({message: error.message});
   } 
});

//handler para busqueda de paquetes mediante el id
router.get('/:id', async(req, res) => {
   const { id } = req.params; 
   try {
       const result = await getPackageById(id);
       res.status(200).json(result);
   } catch (error) {
    res.status(500).json({message: error.message});   
   }
});

//handler para agregar paquetes
router.post('/', async(req, res) => {
    const objeto = req.body;
    try {
        const result = await addPackages(objeto);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({message: error.message});        
    }
});

//handler para agregar paquetes de forma masiva
router.post('/massive', async(req, res) => {
    const array = req.body;
    try {
            const result = await addMassivePackages(array);
            res.status(200).json(result);            
        } catch (error) {
            res.status(500).json({message: error.message});                    
        }
});



module.exports = router;