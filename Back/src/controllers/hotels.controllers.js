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

const createHotel = async (name, image, calification, stars, details, available) => {
    const newActivity = await Hotel.create({name, image, calification, stars, details, available})

    return newActivity;
}

module.exports={
    getHotel,
    searchNameHotel,
    getHotelById,
    createHotel
}