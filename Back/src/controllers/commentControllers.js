const { Comment, User } = require('../database');

// Controlador para crear nuevos comentarios
const createComment = async (req, res) => {
  try {
    const { userId, testimony } = req.body;

    // Verificar si falta algún elemento obligatorio
    if (!userId || !testimony) {
      return res.status(400).json({ message: 'Falta uno o más elementos obligatorios' });
    }

    // Verificar si el usuario existe
    const existingUser = await User.findByPk(userId);
    if (!existingUser) {
      return res.status(404).json({ message: 'El usuario no existe' });
    }

    const newComment = await Comment.create({ idUser: userId, testimony });
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controlador para obtener todos los comentarios
const getAllComments = async () => {
    const comments = await Comment.findAll(); // Obtener todos los comentarios de la base de datos
    return comments;
  };

// Controlador para obtener un comentario por su ID
const getCommentById = async (id) => {
    const comment = await Comment.findByPk(id); // Buscar el comentario por su ID en la base de datos
    return comment;
  };

module.exports = { 
    createComment,
    getAllComments,
    getCommentById
 };
