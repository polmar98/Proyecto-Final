const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "ShoppingCar",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      state: {
        type: DataTypes.INTEGER,
        defaultValue: 0,           //0=pendiente, 1=pagada, 2=anulada
      },
      idBill: {
        type: DataTypes.INTEGER,
        defaultValue: 0,           //este id apuntara al id en la tabla de facturas cuando se haga el pago
      }
    },
    { timestamps: true }
  );
};
