const { Router } = require("express");
const {
  createCountry,
  getCountries,
  getCountriesById,
  deleteCountry,
} = require("../controllers/countries.controllers");

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { name, calification, flag, idContinent } = req.body;
    if (!name) {
      throw new Error("Falta agregar 'name'");
    }

    if (!flag) {
      throw new Error("Falta agregar 'flag'");
    }

    if (!idContinent) {
      throw new Error("Falta agregar 'idContinent'");
    }
    const newCountry = await createCountry(
      name,
      calification,
      flag,
      idContinent
    );
    return res.status(201).send("País creado satisfactoriamente");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const result = await getCountries();

    result.length > 0
      ? res.status(200).json(result)
      : res.status(404).json("No hay países");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const country = await getCountriesById(id);
    country
      ? res.status(200).json(country)
      : res.status(404).json("País no existe");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    res.send("trae el país solicitado por name");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await deleteCountry(id);
    res.status(200).json("País eliminado");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
