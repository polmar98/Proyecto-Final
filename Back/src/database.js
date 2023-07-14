require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_BASE} = process.env;
const TypePackageModel = require("./models/TypePackage");
const PackageModel = require("./models/Package");
const CityPackageModel = require("./models/CityPackage");
const AirlineModel = require("./models/Airline");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_BASE}`,
  { logging: false, native: false }
);

TypePackageModel(sequelize);
CityPackageModel(sequelize);
PackageModel(sequelize);
AirlineModel(sequelize);

const {TypePackage, CityPackage, Package, Airline} = sequelize.models;

Package.hasMany(CityPackage, {foreignKey: 'idPackage', sourceKey: 'id'});
CityPackage.belongsTo(Package, {foreignKey: 'idPackage', targetKey: 'id'});

Package.hasOne(TypePackage, {foreignKey: 'idTypePacket', sourceKey: 'id'});
TypePackage.belongsTo(Package, {foreignKey: 'idTypePacket', targetKey: 'id'});

Package.hasOne(Airline, {foreignKey: 'idAirline', sourceKey: 'id'});
Airline.belongsTo(Package, {foreignKey: 'idAirline', targetKey: 'id'});

module.exports = {
    TypePackage,
    CityPackage,
    Airline,
    Package,
    conn: sequelize,     
};
  