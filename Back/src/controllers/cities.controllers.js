const getCities = (req, res) => {
    res.send("Aqui se devolveran las Ciudades");
};

const addCities = (req, res) => {
    res.send("Aqui se agregaran nuevas ciudades");
    //tener en cuenta que si no existe el Pais hay que agregarlo primero a la tabla de paises
};

const getCityById = (req, res) => {
    //aqui deben devolver ciudades por el Id
};


module.exports = { getCities, addCities };