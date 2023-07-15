const { Comment, User } = require('../database');

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

    const newComment = await Comment.create({ userId, testimony });
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createComment };
