const { City } = require("../database");

const createCity = async (name, idCountry) => {
  try {
    const newCity = await City.findOrCreate({
      where:{ name, idCountry }
    });
  } catch (error) {
    console.log(error.message);
  }
};

const getCities = async () => {
  const dbCities = await City.findAll();
  return dbCities;
};

const getCityById = async (id) => {
  const dbCountry = await City.findOne({
    where: {
      id: id,
    },
    include: {association: "Country", attributes: ["id", "name"]}
  });
  return dbCountry;
};

const deleteCity = async (id) => {
  const deletedCity = await City.destroy({
    where: {
      id: id,
    },
  });

  if (deletedCity === 0) {
    throw new Error("No se encontró la ciudad con el ID especificado");
  }
};

module.exports = { createCity, getCities, getCityById, deleteCity };
