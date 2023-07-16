const { Association } = require('sequelize');
const {TypePackage, Package, City, Airline, Activity} = require('../database');


const addPackages = async(objeto) => {
    const {idTypePackage, title, description,
           initialDate, finalDate, totalLimit,
           standarPrice, promotionPrice, duration,
           originCity, idAirline, outboundFlight,
           returnFlight, image, qualification, 
           idContinent, idCity, idHotel, activitys, 
    } = objeto;
    //validamos la informacion recibida
    if(!idTypePackage || !title  || !description || !initialDate || !finalDate || !totalLimit || !standarPrice 
        || !promotionPrice || !duration || !originCity || !idAirline || !outboundFlight || !returnFlight 
        || !image || !idContinent || !idCity || !idHotel || !activitys || !qualification) {
        return {message: "Datos Incompletos"};
    };
    //armamos el nuevo json a subir en la BD
    const newPackage = {idTypePackage, title, description,
                        initialDate, finalDate, totalLimit,
                        standarPrice, promotionPrice, duration,
                        originCity, idAirline, outboundFlight, idContinent,
                        returnFlight, image, qualification, idCity, idHotel};

    let packageCreated = await Package.create(newPackage); 

     
    //agregamos las actividades del paquete
    activitys.forEach( async(ele) => {
        
    })

    return packageCreated;

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
        }
 });


 const viewPackages = async() => {
    //aqui se deben devolver los paquetes disponibles
    const paquetes = await Package.findAll({
        where: {active: true},
        include: [
            { association:'TypePackage', attributes:['id', 'name']},
            { association:'Airline', attributes:['id', 'name']},
            { association:'City', attributes:['id', 'name']},
            { association:'Hotel', attributes:['id', 'name']},
            { association:'Continent', attributes:['id', 'name']},
        ]},
   
    );    
    
    return paquetes;
};

module.exports = { addPackages, viewPackages };