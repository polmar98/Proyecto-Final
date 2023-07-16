const { User } = require("../database.js");

// Controller Nuevo Usuario
const createUser = async (req, res) => {
  try {
    const { profile, name, lastName, email, password } = req.body;

    // Verificar si falta algún elemento obligatorio
    if (!profile || !name || !lastName || !email || !password) {
      return res
        .status(400)
        .json({ message: "Falta uno o más elementos obligatorios" });
    }

    // Validación de formato de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res
        .status(400)
        .json({ message: "El correo electrónico no tiene un formato válido" });
    }

    // Validación de contraseña segura
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{5,}$/;
    if (!passwordRegex.test(password)) {
      return res
        .status(400)
        .json({
          message:
            "La contraseña debe tener al menos 5 caracteres e incluir al menos una letra mayúscula, una letra minúscula y un número",
        });
    }

    // Validación de unicidad de correo electrónico
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "El correo electrónico ya está registrado" });
    }

    // Validación de longitud de campo
    if (
      name.length < 2 ||
      name.length > 50 ||
      lastName.length < 2 ||
      lastName.length > 50
    ) {
      return res
        .status(400)
        .json({
          message:
            "La longitud del nombre y el apellido debe estar entre 2 y 50 caracteres",
        });
    }

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
