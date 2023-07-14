//Este modelo almacenara los paquetes turisticos

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Package', {
     id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
     },
     idTypePackage: {
        type: DataTypes.INTEGER,
        allowNull: false,
     },
     title: {
        type: DataTypes.STRING,
        allowNull: false,
     },
     description: {
        type: DataTypes.TEXT,
        allowNull: true,
     },
     initialDate: {
        type: DataTypes.STRING,
        allowNull: false,
     },
     finalDate: {
        type: DataTypes.STRING,
        allowNull: false,
     },
     totalLimit: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 100,
     },
     bookings: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
     },
     standarPrice: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        defaultValue: 0,
     },
     promotionPrice: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        defaultValue: 0,       
     },
     duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,        
     },
     originCity: {
        type: DataTypes.INTEGER,
        allowNull: false,
     },
     idAirline: {
        type: DataTypes.INTEGER,
        allowNull: false
     },
     outboundFlight: {
        type: DataTypes.STRING,
        allowNull: false,
     },
     returnFlight: {
        type: DataTypes.STRING,
        allowNull: false,
     },
     image: {
        type: DataTypes.TEXT,
        allowNull: true,
     },
     qualification: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        defaultValue: 0,
     },
     active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
     }  
  },{ timestamps: false });
};