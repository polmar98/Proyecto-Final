const { Router } = require('express');
const { createComment, getAllComments, getCommentById } = require('../controllers/commentControllers.js');
const router = Router();

// Ruta para crear comments 
router.post('/', createComment);

// Ruta para obtener todos los comentarios
router.get('/', async (req, res) => {
    try {
      const comments = await getAllComments(); // Llamar al controlador para obtener todos los comentarios
      res.status(200).json(comments); // Devolver los comentarios como respuesta
    } catch (error) {
      res.status(500).json({ message: error.message }); // Manejar cualquier error que ocurra durante la obtención de los comentarios
    }
  });

// Ruta para obtener un comentario por su ID
router.get('/:id', async (req, res) => {
    try {
      const { id } = req.params; // Obtener el ID del comentario desde los parámetros de la URL
      const comment = await getCommentById(id); // Llamar al controlador para obtener el comentario por su ID
      if (!comment) {
        res.status(404).json({ message: 'Comment not found' }); // Manejar el caso en que el comentario no exista
      } else {
        res.status(200).json(comment); // Devolver el comentario encontrado como respuesta
      }
    } catch (error) {
      res.status(500).json({ message: error.message }); // Manejar cualquier error que ocurra durante la obtención del comentario
    }
  });

module.exports = router;