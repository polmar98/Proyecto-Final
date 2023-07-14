const {TypePackage, Package, CityPackage, City} = require('../database');

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

//esta funcion devuelve el array de paquetes mapeados
const mapList = (array) => array.map((result) => {
    return {
        id: result.id,
        idTypePackage: result.idTypePackage,
        title: result.title,
        description: result.description,
        initialDate: result.initialDate,
        finalDate: result.finalDate,
        totalLimit: result.totalLimit,
        standarPrice: result.standarPrice,
        promotionPrice: result.promotionPrice,
        duration: result.duration,
        image: result.image,
        cities: [],
      }
 });

 //esta funcion devuelve un array mapeado de las ciudades del paquete
 const mapCities = (array) => array.map((element) => {
    return {
        idCity: element.idCity,
        idHotel: element.idHotel,
    }
 });

 const viewPackages = async() => {
    //aqui se deben devolver los paquetes disponibles
    const paquetes = await Package.findAll({ where: {active: true}});

    let lista = mapList(paquetes);
    lista.forEach(async(ele) => {
        const ciudades = await CityPackage.findAll({where: {idPackage: ele.id}});
        const xciudades = mapCities(ciudades);
        ele.cities = xciudades;
    });
    return lista;
};

module.exports = { addPackages, viewPackages };