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
        default: 100,
     },
     bookings: {
        type: DataTypes.INTEGER,
        allowNull: false,
        default: 0,
     },
     standarPrice: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        default: 0,
     },
     promotionPrice: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        default: 0,       
     },
     duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
        default: 0,        
     },
     originCity: {
        type: DataTypes.INTEGER,
        allowNull: false,
     },
     active: {
        type: DataTypes.BOOLEAN,
        default: true,
     }  
  },{ timestamps: false });
};