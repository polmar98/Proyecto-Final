const { Router } = require("express");
const {
  getAllUsers,
  deleteUser,
  getUserById,
  createUser,
} = require("../controllers/usersControllers");


const router = Router();

// Crear un nuevo usuario
router.post('/', createUser);


// Obtener todos los usuarios
router.get("/", async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Eliminar un usuario por su ID
router.delete("/:id", async (req, res) => {
  try {
    const {id} = req.params;
    await deleteUser(id);
    res.status(200).json({ message: "Usuario eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Obtener un usuario por su ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getUserById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
