const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Activity', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
        },
        image: {
            type: DataTypes.TEXT,
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