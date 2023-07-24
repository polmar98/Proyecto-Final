const { Router } = require('express');
const {getActivity,
    searchNameActivity,
    createActivity,
    getActivityById} = require('../controllers/activitiesControllers');

const router = Router();


router.get('/', async (req, res)=>{
    const {name}= req.query;
    console.log(req.query);
    try {
        const resultado = name ? await searchNameActivity(name) : await getActivity();
        resultado.length ? 
        res.status(200).json(resultado) : res.status(404).json({error: error.message});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/:id', async (req, res)=>{
    const {id}= req.params;
    try {
        const resultado =  await getActivityById(id);
        res.status(200).json(resultado);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})



router.post('/', async(req, res) =>{
    const {name, image, price, calification, available, idPackage} = req.body;
    try {
        const newAct = await createActivity(name, image, price, calification, available, idPackage);
        res.status(201).json(newAct);
    } catch (error) {
        res.status(404).send("Faild create activity");
    }
})


module.exports = router;