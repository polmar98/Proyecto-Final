const { Router } = require('express');
const {getHotel,
    searchNameHotel,
    createHotel,
    getHotelById
} = require('../controllers/hotels.controllers');

const router = Router();


router.get('/' , async (req, res) => {
   const { name } = req.query;

   try {
    const resultado = name ? await searchNameHotel(name) : await getHotel();
    res.status(200).json(resultado);
   } catch (error) {
    res.status(500).json({ message: error.message });
   }
})

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try{
        const hl = await getHotelById(id);
        hl
        ? res.status(200).json(hl)
        : res.status(404).json("Ciudad no existe")
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
})

router.post('/', async (req, res) => {
    const {name, image, calification, stars, details, available, idCity} = req.body;

    console.log(req.body);

try {
    const hotelNew = await createHotel(name, image, calification, stars, details, available);
    res.status(201).json(hotelNew);
} catch (error) {
    res.status(404).send("Faild create hotel");
}
})

module.exports = router;