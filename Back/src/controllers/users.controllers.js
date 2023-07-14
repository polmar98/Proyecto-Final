const axios = requiere('axios')
const {User} = require('../database')

const addUsers = async (name, lastName, email, password, dateRecord, perfil) =>{
    const newUser = await User.create(
        {name, lastName, email, password, dateRecord, perfil})
}

module.exports = {addUsers}