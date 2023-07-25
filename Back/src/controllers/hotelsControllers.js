const {Hotel} = require('../database');


const getHotel = async () =>{
    const hotelDB = await Hotel.findAll(
        {include: { association:'City', attributes:['id', 'name']}}
    );
    return hotelDB;
}

const searchNameHotel = async (name) => {
    const dbHotel = await Hotel.findAll({
        where: {
            name:name
        }, include: { association:'City', attributes:['id', 'name']}
    })

    return dbHotel;
}

const getHotelById = async (id) => {
    const dbHotl = await Hotel.findOne({
      where: {
        id: id,
      },
      include: { association:'City', attributes:['id', 'name']}
    });
    return dbHotl;
  };

const createHotel = async (name, image, calification, stars, details, idCity) => {
    const newHotel = await Hotel.findOrCreate({
        where:{ name, image, calification, stars, details, idCity}
    })

    return newHotel;
};

const bulkCreateHotels = async (hotelsData) => {
    try {
      await Hotel.bulkCreate(hotelsData);
    } catch (error) {
      console.log(error.message);
    }
  };


//Funcion para eliminar hotel
const deleteHotel = async (id) => {
  await Hotel.destroy({ where: { id: id,}, });
 const deleteHotel = await Hotel.findAll();
 return deleteHotel;
}

//funcion para editar actividades
const updateHotel = async (id, newData) => {
  // Utiliza el método update de Sequelize para modificar los datos en la base de datos
  await Hotel.update(newData, {
    where: { id: id },
  });
  
  // Después de la actualización, obtén los datos actualizados
  const updatedHotel = await Hotel.findByPk(id);
  return updatedHotel;
};

module.exports={
    getHotel,
    searchNameHotel,
    getHotelById,
    createHotel,
    bulkCreateHotels,
    deleteHotel,
    updateHotel,
}