const { Router } = require('express');
const {addUsers} = require('../controllers/users.controllers')
const router = Router();


router.post('/', async (req, res) => {
    try {
      const { name, lastName, email, password, dateRecord, perfil } = req.body;
      const newUser = await addUsers({ name, lastName, email, password, dateRecord, perfil });
      res.status(200).json(newUser);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
 
 module.exports = router;