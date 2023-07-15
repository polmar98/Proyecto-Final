require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_BASE} = process.env;
const TypePackageModel = require("./models/TypePackage");
const PackageModel = require("./models/Package");
const CityPackageModel = require("./models/CityPackage");
const AirlineModel = require("./models/Airline");
const CityModels = require("./models/City");
const CountryModels = require('./models/Country');
const ContinentModels = require('./models/Continent');
const HotelModels = require('./models/Hotel');
const ActivityModels = require('./models/Activity');
const UserModels = require('./models/User');
const CommentModels = require('./models/comment');

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_BASE}`,
  { logging: false, native: false }
);


TypePackageModel(sequelize);
CityPackageModel(sequelize);
PackageModel(sequelize);
AirlineModel(sequelize);
CityModels(sequelize);
CountryModels(sequelize);
ContinentModels(sequelize);
HotelModels(sequelize);
ActivityModels(sequelize);
UserModels(sequelize);
CommentModels(sequelize);

const {TypePackage, CityPackage,
       Package, Airline, City,
       Country, Continent,
       Hotel, Activity,
       User, Comment } = sequelize.models;

// establecemos las relaciones
Package.hasMany(CityPackage, {foreignKey: 'idPackage', sourceKey: 'id'});
CityPackage.belongsTo(Package, {foreignKey: 'idPackage', targetKey: 'id'});

Package.belongsTo(TypePackage, {foreignKey: 'idTypePackage', targetKey: 'id'});

Package.belongsTo(Airline, {foreignKey: 'idAirline', sourceKey: 'id'});
//Airline.belongsToMany(Package, {through: 'package_airline'});

Country.hasMany(City, {foreignKey: 'idCountry', sourceKey: 'id'});
City.belongsTo(Country, {foreignKey: 'idCountry', targetKey: 'id'});

Continent.hasMany(Country, {foreignKey: 'idContinent', sourceKey: 'id'});
Country.belongsTo(Continent, {foreignKey: 'idContinent', targetKey: 'id'});

City.hasMany(Hotel, {foreignKey: 'idCity', sourceKey: 'id'});
Hotel.belongsTo(City, {foreignKey: 'idCity', targetKey: 'id'});

Package.hasMany(Activity, {foreignKey: 'idPackage', sourceKey: 'id'});
Activity.belongsTo(Package, {foreignKey: 'idPackage', targetKey: 'id'});

User.hasMany(Comment, {foreignKey: 'idUser', sourceKey: 'id'});
Comment.belongsTo(User, {foreignKey: 'idPackage', targetKey: 'id'});

CityPackage.belongsTo(City, {foreignKey: 'idCity', targetKey: 'id'})
CityPackage.belongsTo(Hotel, {foreignKey: 'idHotel', targetKey: 'id'})

module.exports = {
    TypePackage, CityPackage,
    Airline, Package,
    City, Country, Continent,
    Hotel, Activity,
    User, Comment,
    conn: sequelize, 

};
  