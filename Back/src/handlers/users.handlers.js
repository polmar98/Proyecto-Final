const { Router } = require('express');
const {addUsers, getAllUsers} = require('../controllers/users.controllers')
const router = Router();

// Crear un nuevo usuario
router.post('/', async (req, res) => {
    try {
      const { name, lastName, email, password, dateRecord, profile } = req.body;
      const newUser = await addUsers({ name, lastName, email, password, dateRecord, profile });
      res.status(200).json(newUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

// Obtener todos los usuarios 
router.get('/', async (req, res) => {
    try {
        const users = await getAllUsers();
        res.status(200).json(users);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
})
 
 module.exports = router;