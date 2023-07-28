const { User } = require("../database.js");

//  Controller Nuevo Usuario google 


// Controller Nuevo Usuario 
const createUser = async (datos) => {
     const { uid, profile, name, lastName, email } = datos;
     //console.log(datos);
     if(!uid || !profile || !email) {
        return {message: "Datos Basicos incompletos"};
     };

     const newUser = await User.create({ uid, profile, name, lastName, email, password: "" });
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
const getUserById = async (uid) => {
  const user = await User.findByPk(uid);
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
