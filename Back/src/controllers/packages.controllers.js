const {TypePackage, Package, CityPackage} = require('../database');

const addPackages = async(objeto) => {
    const {idTypePackage, title, description,
           initialDate, finalDate, totalLimit,
           standarPrice, promotionPrice, duration,
           originCity, idAirline, outboundFlight,
           returnFlight, image, cities, activitys,qualification
    } = objeto;
    //validamos la informacion recibida
    if(!idTypePackage || !title  || !description || !initialDate || !finalDate || !totalLimit || !standarPrice 
        || !promotionPrice || !duration || !originCity || !idAirline || !outboundFlight || !returnFlight 
        || !image || !cities || !activitys || !qualification) {
        return {message: "Datos Incompletos"};
    };
    //armamos el nuevo json a subir en la BD
    const newPackage = {idTypePackage, title, description,
                        initialDate, finalDate, totalLimit,
                        standarPrice, promotionPrice, duration,
                        originCity, idAirline, outboundFlight,
                        returnFlight, image, qualification};


    let packageCreated = await Package.create(newPackage);  
    
    return newPackage;
    //complementar la grabacion de cities con su hotel

    //complementar la grabacion de actividades del paquete
};

const viewPackages = () => {
    //aqui se deben devolver los paquetes disponibles
    const result = {paquete: "Paquetes Turisticos"}
    return result;
};

module.exports = { addPackages, viewPackages };