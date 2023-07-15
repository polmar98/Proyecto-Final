const { Association } = require('sequelize');
const {TypePackage, Package, CityPackage, City, Airline, Activity} = require('../database');


const addPackages = async(objeto) => {
    const {idTypePackage, title, description,
           initialDate, finalDate, totalLimit,
           standarPrice, promotionPrice, duration,
           originCity, idAirline, outboundFlight,
           returnFlight, image, cities, activitys, qualification
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

//funcion que devuelve als ciudades asociadas al paquete
const searchCities = async(id) => {
    const ciudades = await CityPackage.findAll({where: {idPackage: id}});
    const xciudades = mapCities(ciudades);
    return xciudades
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
    const paquetes = await Package.findAll({
        where: {active: true},
        include: [
            { association:'TypePackage', attributes:['id', 'name']},
            { association:'Airline', attributes:['id', 'name']}
           
        ]},
        
        );    
    let lista = mapList(paquetes);
    let resultado = [];
    let registro = {};

    lista.forEach(async(elemento) => {
         const cities = await searchCities(elemento.id);
         registro = {
            id: elemento.id,
            idTypePackage: elemento.idTypePackage,
            title: elemento.title,
            description: elemento.description,
            initialDate: elemento.initialDate,
            finalDate: elemento.finalDate,
            totalLimit: elemento.totalLimit,
            standarPrice: elemento.standarPrice,
            promotionPrice: elemento.promotionPrice,
            duration: elemento.duration,
            image: elemento.image,
            citiesPackage: cities,            
        };
        /* console.log(registro.citiesPackage); */
        /* resultado.push(registro); */
     
    });
    return paquetes;
};

module.exports = { addPackages, viewPackages };