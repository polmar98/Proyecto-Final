const { Router } = require("express");
const {
    createAdmin,
    getAdminById,
} = require("../controllers/admin.controller");


const router = Router();

// Crear un nuevo usuario
router.post('/', createAdmin);


// Obtener un usuario por su ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getAdminById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
