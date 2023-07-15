const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Activity', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncremente: true,
            unique: true,
        },
        idPackage:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        details:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        price:{
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        calification: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        available: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }

    },{ timestamps: false })
};