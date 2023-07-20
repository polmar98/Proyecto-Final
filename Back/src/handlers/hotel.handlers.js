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
    resultado.length ?
        res.status(200).json(resultado) : res.status(404).json({error: error.message})
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
    const {name, image, calification, stars, details, idCity} = req.body;

try {
    const hotelNew = await createHotel(name, image, calification, stars, details, idCity);
    res.status(201).json(hotelNew);
} catch (error) {
    console.log(error.message);
    res.status(404).send("Faild create hotel");
}
})


router.post('/massive', async (req, res) => {
    const { hoteles } = req.body;
  
    try {
      const createdHotels = [];
      for (const hotel of hoteles) {
        const createdHotel = await createHotel(
          hotel.name,
          hotel.image,
          hotel.calification,
          hotel.stars,
          hotel.details,
          hotel.available,
          hotel.idCity
        );
        createdHotels.push(createdHotel);
      }
  
      res.status(201).json(createdHotels);
    } catch (error) {
      res.status(500).json({error: error.message });
    }
  });



module.exports = router;