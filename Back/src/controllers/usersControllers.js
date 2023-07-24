const { User } = require("../database.js");

//  Controller Nuevo Usuario google 


// Controller Nuevo Usuario 
const createUser = async (req, res) => {
  try {
    const { profile, name, lastName, email, password } = req.body;
    /* console.log({ profile, name, lastName, email, password }); */

    const newUser = await User.create({
      profile,
      name,
      lastName,
      email,
      password,
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Controller llamado a todos los Usuarios
const getAllUsers = async () => {
  const users = await User.findAll();
  return users;
};

// Controller eliminar un Usuario
const deleteUser = async (id) => {
  const user = await User.findByPk(id);
  if (!user) {
    throw new Error("Usuario no encontrado");
  }
  await user.destroy();
};

// Controller llamdo a usuario por Id
const getUserById = async (id) => {
  const user = await User.findByPk(id);
  if (!user) {
    throw new Error("Usuario no encontrado");
  }
  return user;
};

module.exports = {
  createUser,
  getAllUsers,
  deleteUser,
  getUserById,
};
