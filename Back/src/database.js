require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_BASE} = process.env;
const TypePackageModel = require("./models/TypePackage");
const PackageModel = require("./models/Package");
const CityPackageModel = require("./models/CityPackage");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_BASE}`,
  { logging: false, native: false }
);

TypePackageModel(sequelize);
CityPackageModel(sequelize);
PackageModel(sequelize);

const {TypePackage, CityPackage, Package} = sequelize.models;

Package.hasMany(CityPackage, {foreignKey: 'idPackage', sourceKey: 'id'});
CityPackage.belongsTo(Package, {foreignKey: 'idPackage', targetKey: 'id'});

Package.belongsTo(TypePackage, {foreignKey: 'idTypePacket', sourceKey: 'id'});

module.exports = {
    TypePackage,
    CityPackage,
    Package,
    conn: sequelize,     
};
  