const { Continent } = require("../database");

const createContinent = async (name) => {
  try {
    const newContinent = await Continent.create({ name });
  } catch (error) {
    console.log(error.message);
  }
};

const getContinents = async () => {
  const dbContinents = await Continent.findAll();
  return dbContinents;
};
const getContinentsById = async (id) => {
  const dbContinent = await Continent.findOne({
    where: {
      id: id,
    },
  });
  return dbContinent;
};

const getContinentsByName = async (name) => {
  let plainName = name.toLowerCase();
  const dbContinents = await Continent.findAll({
    where: {
      name: plainName,
    },
  });
  return dbContinents;
};

const deleteContinent = async (id) => {
  const deletedContinent = await Continent.destroy({
    where: {
      id: id,
    },
  });

  if (deletedContinent === 0) {
    throw new Error("No se encontró el continente con el ID especificado");
  }
};

module.exports = {
  createContinent,
  getContinents,
  getContinentsById,
  getContinentsByName,
  deleteContinent,
};