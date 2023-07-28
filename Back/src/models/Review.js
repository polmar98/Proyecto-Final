const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Review", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    },
    calification: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        defaultValue: 0,
    },
    uidUser: {
        type: DataTypes.STRING,
        allowNull: false,
    },

  },{timestamps: true});
};
