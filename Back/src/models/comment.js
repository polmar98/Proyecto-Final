const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Comment", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    testimony: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
  },{timestamps:false});
};
