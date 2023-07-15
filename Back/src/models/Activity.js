const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Activity', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncremente: true,
            unique: true,
        },
        details:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        duration: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        price:{
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        calification: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        available: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }

    },{ timestamps: false })
};