//Este modelo almacenara cada una de las ciudades del recorrido del paquete turistico

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('CityPackage', {
     id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
     },
     idPackage: {
        type: DataTypes.INTEGER,
        allowNull: false,
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