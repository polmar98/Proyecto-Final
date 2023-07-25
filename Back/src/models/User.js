const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    uid: {
      type: DataTypes.STRING, // 
      primaryKey: true,
    },

    profile: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 1
    },
    dateRecord: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    locked: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    
  },{timestamps:false});
};