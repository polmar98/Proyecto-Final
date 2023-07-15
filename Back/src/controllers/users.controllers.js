const axios = requiere('axios')
const {User} = require('../database.js')

const addUsers = async (name, lastName, email, password, dateRecord, profile) => {
    if (!name || !lastName || !email || !password || !dateRecord || !profile) {
      throw new Error('Falta uno o más atributos requeridos');
    }
  
    const newUser = await User.create({ name, lastName, email, password, dateRecord, profile });
  };

const getAllUsers = async () =>{
    const users = await User.findAll();
  return users;
}

module.exports = {
    addUsers,
    getAllUsers
}