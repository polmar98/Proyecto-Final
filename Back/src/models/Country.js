module.exports = (sequelize) => {
    sequelize.define(
      "Country",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          unique: true,
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
          type: DataTypes.STRING,
          allowNull: false,
        },
  
        idContinent: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      { timestamps: false }
    );
  }