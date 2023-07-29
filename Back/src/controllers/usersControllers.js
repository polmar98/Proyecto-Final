const { User } = require("../database.js");

//  Controller Nuevo Usuario google

// Controller Nuevo Usuario
const createUser = async (datos) => {
  const { uid, profile, name, lastName, email } = datos;
  //console.log(datos);
  if (!uid || !profile || !email) {
    return { message: "Datos Basicos incompletos" };
  }

  const newUser = await User.create({
    uid,
    profile,
    name,
    lastName,
    email,
    password: "",
  });
  return newUser;
};

// Controller llamado a todos los Usuarios
const getAllUsers = async () => {
  const users = await User.findAll();
  return users;
};

// Controller eliminar un Usuario
const deleteUser = async (uid) => {
  const user = await User.findByPk(uid);
  if (!user) {
    throw new Error("Usuario no encontrado");
  }
  await user.destroy();
};

// Controller llamdo a usuario por Id
const getUserByUid = async (uid) => {
  const user = await User.findOne({ where: { uid: uid } });
  if (!user) {
    throw new Error("Usuario no encontrado");
  }
  return user;
};


// Controller para modificar un usuario existente
const updateUser = async (id, newData) => {
  try {
    const user = await User.findByPk(id);

    if (!user) {
      throw new Error("Usuario no encontrado");
    }

    // Actualizar los atributos del usuario con los datos proporcionados en newData
    // Por ejemplo, si newData es un objeto con los atributos que se desean modificar:
    // { name: "Nuevo nombre", lastName: "Nuevo apellido", email: "nuevo@ejemplo.com" }
    // Esto actualizará únicamente los atributos proporcionados y dejará los demás sin cambios.
    await user.update(newData);

    return { message: "Usuario modificado exitosamente" };
  } catch (error) {
    // Si ocurre algún error durante la modificación, puedes manejarlo aquí.
    console.error("Error al modificar el usuario:", error);
    throw new Error("Hubo un problema al modificar el usuario");
  }
};


module.exports = {
  createUser,
  getAllUsers,
  deleteUser,
  getUserByUid,
  updateUser
};
