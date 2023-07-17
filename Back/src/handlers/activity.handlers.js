const { Router } = require('express');
const {getActivity,
    searchNameActivity,
    createActivity} = require('../controllers/activities.controllers');

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
})


router.post('/', async(req, res) =>{
    const {name, image, price, calification, available} = req.body;
// console.log(req.body);
    try {
        const newAct = await createActivity(name, image, price, calification, available);
        res.status(201).json(newAct);
    } catch (error) {
        res.status(404).send("Faild create activity");
    }
})


module.exports = router;