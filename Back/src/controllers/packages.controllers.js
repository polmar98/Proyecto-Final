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

    //agregamos los registros de las ciudades con su hotel a visitar
    cities.forEach( async(element) => {
        await CityPackage.create({idCity: element.idCity, idHotel: element.idHotel, idPackage: packageCreated.id });
    }); 
    
    //agregamos las actividades del paquete
    activitys.forEach( async(ele) => {
        
    })

    return packageCreated;
    //complementar la grabacion de cities con su hotel

    //complementar la grabacion de actividades del paquete
};

const viewPackages = () => {
    //aqui se deben devolver los paquetes disponibles
    const result = {paquete: "Paquetes Turisticos"}
    return result;
};

module.exports = { addPackages, viewPackages };