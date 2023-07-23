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

module.exports={
    getHotel,
    searchNameHotel,
    getHotelById,
    createHotel,
    bulkCreateHotels
}