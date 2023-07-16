const { Association } = require('sequelize');
const {TypePackage, Package, City, Airline, Activity} = require('../database');


const addPackages = async(objeto) => {
    const {idTypePackage, title, description,
           initialDate, finalDate, totalLimit,
           standarPrice, promotionPrice, duration,
           originCity, idAirline, outboundFlight,
           returnFlight, image, qualification,service, 
           idContinent, idCity, idHotel, activitys, 
    } = objeto;
    //validamos la informacion recibida
    if(!idTypePackage || !title  || !description || !initialDate || !finalDate || !totalLimit || !standarPrice 
        || !promotionPrice || !duration || !originCity || !idAirline || !outboundFlight || !returnFlight 
        || !image || !idContinent || !idCity || !idHotel || !activitys || !qualification || !service) {
        return {message: "Datos Incompletos"};
    };
    //armamos el nuevo json a subir en la BD
    const newPackage = {idTypePackage, title, description,
                        initialDate, finalDate, totalLimit,
                        standarPrice, promotionPrice, duration,
                        originCity, idAirline, outboundFlight, idContinent,
                        returnFlight, image, qualification, idCity, idHotel, service};

    const packageCreated = await Package.create(newPackage); 
    const id = packageCreated.id;
     
    //agregamos las actividades del paquete
    activitys.forEach( async(ele) => {
        const newActivity = {
            details: ele.description,
            image: ele.image,
            price: ele.price,
            included: ele.included,
            idPackage: id,
        }
        await Activity.create(newActivity);
    })

    return packageCreated;

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
        service: result.service,
        }
 });

//Esta funcion devuelve todos los paquetes disponibles en la BD
 const viewPackages = async() => {
    const paquetes = await Package.findAll({
        where: {active: true},
        include: [
            { association:'TypePackage', attributes:['id', 'name']},
            { association:'Airline', attributes:['id', 'name']},
            { association:'City', attributes:['id', 'name']},
            { association:'Hotel', attributes:['id', 'name']},
            { association:'Continent', attributes:['id', 'name']},
            { model: Activity},
        ]},
   
    );    
    return paquetes;
};


//Esta funcion devuelve un solo paquete mediante el ID
const getPackageById = async(idp) => {
   const paquete = await Package.findByPk(idp, {
    include: [
        { association:'TypePackage', attributes:['id', 'name']},
        { association:'Airline', attributes:['id', 'name']},
        { association:'City', attributes:['id', 'name']},
        { association:'Hotel', attributes:['id', 'name', 'stars']},
        { association:'Continent', attributes:['id', 'name']},
        { model: Activity},     
        ]
   });
   return paquete;
};

module.exports = { addPackages, viewPackages, getPackageById };