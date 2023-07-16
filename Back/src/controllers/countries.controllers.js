const { Country } = require("../database");

const createCountry = async (name, calification, flag, idContinent) => {
    try {
        const newContinent = await Country.create({ name, calification, flag, idContinent });
      } catch (error) {
        console.log(error.message);
}
}

const getCountries = async () => {
    const dbCountries = await Country.findAll();
    return dbCountries; 
}

const getCountriesById = async (id) => {
    const dbCountry = await Country.findOne({
      where: {
        id: id,
      },
    });
    return dbCountry;
  };

  const deleteCountry = async (id) => {
    const deletedCountry = await Country.destroy({
      where: {
        id: id,
      },
    });
  
    if (deletedCountry === 0) {
      throw new Error("No se encontró el país con el ID especificado");
    }
  };
  

module.exports = {createCountry, getCountries, getCountriesById, deleteCountry}