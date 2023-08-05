const { Association } = require("sequelize");
const { TypePackage, Package,
        City, Airline,
        Activity, Country,
        CityOrigin, Comment} = require("../database");
        
const { Op } = require("sequelize");

const addPackages = async (objeto) => {
  const {
    idTypePackage,
    title,
    description,
    initialDate,
    finalDate,
    totalLimit,
    standarPrice,
    promotionPrice,
    duration,
    originCity,
    idAirline,
    outboundFlight,
    returnFlight,
    image,
    qualification,
    service,
    idContinent,
    idCountry,
    idCity,
    idHotel,
    activitys,
  } = objeto;

  //validamos la informacion recibida
  if (
    !idTypePackage || !title || !description ||
    !initialDate || !finalDate || !totalLimit ||
    !standarPrice || !promotionPrice || !duration ||
    !originCity || !idAirline || !outboundFlight ||
    !returnFlight || !image || !idContinent ||
    !idCountry || !idCity || !idHotel ||
    !activitys || !qualification || !service) {
    return { message: "Datos Incompletos " };
  }

  //armamos el nuevo json a subir en la BD
  const newPackage = {
    idTypePackage,
    title,
    description,
    initialDate,
    finalDate,
    totalLimit,
    standarPrice,
    promotionPrice,
    duration,
    originCity,
    idAirline,
    outboundFlight,
    idContinent,
    idCountry,
    returnFlight,
    image,
    qualification,
    idCity,
    idHotel,
    service,
  };

  const packageCreated = await Package.create(newPackage);
  const id = packageCreated.id;

  //agregamos las actividades del paquete
  activitys.forEach(async (ele) => {
    const newActivity = {
      name: ele.name,
      image: ele.image,
      price: ele.price,
      included: ele.included,
      idPackage: id,
      duration: ele.duration,
    };
    await Activity.create(newActivity);
  });
  return packageCreated;
};

//Esta funcion devuelve todos los paquetes disponibles en la BD
const viewPackages = async () => {
  const paquetes = await Package.findAll({
    where: { active: true },
    include: [
      { association: "TypePackage", attributes: ["id", "name"] },
      { association: "Airline", attributes: ["id", "name"] },
      { association: "City", attributes: ["id", "name", "idCountry"] },
      { association: "Hotel", attributes: ["id", "name", "stars", "image", "calification", "details"]},
      { association: "Continent", attributes: ["id", "name"] },
      { association: "Country", attributes: ["id", "name"] },
      { association: "CityOrigin", attributes: ["id", "name"] },
      { model: Activity },
      { model: Comment },
    ],
  });
  return paquetes;
};


//Esta funcion devuelve todos los paquetes disponibles y no disponibles en la BD
const viewPackagesAll = async () => {
  const paquetes = await Package.findAll({
    include: [
      { association: "TypePackage", attributes: ["id", "name"] },
      { association: "Airline", attributes: ["id", "name"] },
      { association: "City", attributes: ["id", "name", "idCountry"] },
      { association: "Hotel", attributes: ["id", "name", "stars", "image", "calification", "details"]},
      { association: "Continent", attributes: ["id", "name"] },
      { association: "Country", attributes: ["id", "name"] },
      { association: "CityOrigin", attributes: ["id", "name"] },
      { model: Activity },
      { model: Comment },
    ],
  });
  return paquetes;
};

//Esta funcion devuelve un solo paquete mediante el ID
const getPackageById = async (idp) => {
  const paquete = await Package.findByPk(idp, {
    include: [
      { association: "TypePackage", attributes: ["id", "name"] },
      { association: "Airline", attributes: ["id", "name"] },
      { association: "City", attributes: ["id", "name", "idCountry"] },
      { association: "Hotel",attributes: ["id", "name", "stars", "image", "calification", "details"]},
      { association: "Continent", attributes: ["id", "name"] },
      { association: "Country", attributes: ["id", "name"] },
      { association: "CityOrigin", attributes: ["id", "name"] },
      { model: Activity },
      { model: Comment },
    ],
  });
  return paquete;
};

//esta funcion hace una busqueda de paquetes en el campo titulo
const searchPackages = async (search) => {
  const paquetes = await Package.findAll({
    where: {
      active: true,
      title: {
        [Op.iLike]: `%${search}%`,
      },
    },
    include: [
      { association: "TypePackage", attributes: ["id", "name"] },
      { association: "Airline", attributes: ["id", "name"] },
      { association: "City", attributes: ["id", "name", "idCountry"] },
      { association: "Hotel",attributes: ["id", "name", "stars", "image", "calification", "details"]},
      { association: "Continent", attributes: ["id", "name"] },
      { association: "Country", attributes: ["id", "name"] },
      { association: "CityOrigin", attributes: ["id", "name"] },
      { model: Activity },
      { model: Comment },
    ],
  });
  return paquetes;
};

//la sgte rutina almacena de forma masiva paquetes enviados desde un array
const addMassivePackages = async (array) => {
  array.forEach(async (objeto) => {
    await addPackages(objeto);
  });
  return "Array de paquetes cargado";
};

//la siguiente rutina permite modificar los paquetes
const updatePackages = async(objeto, idPackage) => {
    const {
       idTypePackage, title, description,
       initialDate, finalDate, totalLimit,
       standarPrice, promotionPrice, duration,
       originCity, idAirline, outboundFlight,
       returnFlight, image, qualification,
       service, idContinent, idCountry,
       idCity, idHotel,
    } = objeto;   

    //validamos la informacion recibida
    if(!idTypePackage || !title || !description ||
      !initialDate || !finalDate || !totalLimit ||
      !standarPrice || !promotionPrice || !duration ||
      !originCity || !idAirline || !outboundFlight ||
      !returnFlight || !image || !idContinent ||
      !idCountry || !idCity || !idHotel ||
      !qualification || !service) {
      return { message: "Datos Incompletos (3)" };
    };
    //actualizamos la info despues de haber validado
    const rows = await Package.update( objeto, { where: {id: idPackage} });
};

module.exports = {
  addPackages,
  viewPackages,
  getPackageById,
  searchPackages,
  addMassivePackages,
  updatePackages,
  viewPackagesAll,
};
