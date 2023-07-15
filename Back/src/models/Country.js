const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Country', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        calification: {
          type: DataTypes.DECIMAL,
          allowNull: false,
        },
        flag: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
      },
      { timestamps: false }
    );
  }