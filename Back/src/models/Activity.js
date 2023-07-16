const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Activity', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        details:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        duration: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image : {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        price:{
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: 0,
        },
        calification: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: 0,
        },
        available: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
        included: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }

    },{ timestamps: false })
};