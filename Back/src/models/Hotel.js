const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Hotel', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncremente: true,
            unique: true,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        images: {
            type: DataTypes.ARRAY(DataTypes.TEXT),
            allowNull: false,
          },
        calification: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        stars:{
            type: DataTypes.DECIMAL,
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