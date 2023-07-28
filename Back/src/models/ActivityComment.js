const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("ActivityComment", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    },
    testimony: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    uidUser: {
        type: DataTypes.STRING,
        allowNull: false,
    },

  },{timestamps: true});
};