const { Router } = require("express");
const {
  createCity,
  getCities,
  getCityById,
  getCityByName,
  deleteCity,
} = require("../controllers/cities.controllers");

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { name, originCity, idCountry } = req.body;
    if (!name) {
      throw new Error("Falta agregar name");
    }

    if (!idCountry) {
      throw new Error("Falta agregar idCountry ");
    }

    const newCity = await createCity(name, originCity, idCountry);
    return res.status(201).send("Ciudad creada satisfactoriamente");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const result = await getCities();
    result.length > 0
      ? res.status(200).json(result)
      : res.status(404).json("No hay Ciudades");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const city = await getCityById(id);
    city
      ? res.status(200).json(city)
      : res.status(404).json("Ciudad no existe");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


//al pedir una ciudad por nombre, no está entrando en este handler
router.get("/cities", async (req, res) => {
  try {
    const { name } = req.query;
    const city = await getCityByName(name);

    city
      ? res.status(200).json(city)
      : res.status(404).json("Ciudad no existe");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await deleteCity(id);
    res.status(200).json("Ciudad eliminada");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
