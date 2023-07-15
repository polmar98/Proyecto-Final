const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Hotel', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncremente: true,
            unique: true,
        },
        idCity:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        idPackage:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        calification: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        stars:{
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        details: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        available: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }

    },{ timestamps: false })
};