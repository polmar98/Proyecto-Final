const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('City', {
     id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
     },
     name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
     } ,
     calification: {
        type: DataTypes.DECIMAL,
        defaultValue: 0,
     },
     idCountry: {
        type: DataTypes.INTEGER,
        allowNull: false
     } 
  },{ timestamps: false });
};