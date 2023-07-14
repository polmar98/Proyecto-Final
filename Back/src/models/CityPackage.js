//Este modelo almacenara cada una de las ciudades del recorrido del paquete turistico y su hotel de alojamiento

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('CityPackage', {
     id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
     },
     idCity: {
        type: DataTypes.INTEGER,
        allowNull: false,
     } ,
     idHotel: {
        type: DataTypes.INTEGER,
        allowNull: false,
     } 
  },{ timestamps: false });
};