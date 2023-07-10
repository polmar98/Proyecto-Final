import Country from "../models/Country";

const grabarPais = async(req, res) => {
    const {codigo, nombre} = req.body;
    if(!codigo || !nombre) {
        res.status(404).json({Message: "Datos Incompletos"})
    };
    try {
       const country = {codigo, nombre, calificacion: 0.00};
       const newCountry = Country(country);
       const salvado = await newCountry.save();
       res.status(200).json(newCountry);
    } catch (error) {
       res.status(500).json({message: error.message}); 
    }

};

const listarPaises = async(req, res) => {
    try {
        const lista = await Country.find().lean(); 
        res.status(200).send(lista);
    } catch (error) {
        res.status(500).json({message: error.message});  
    }
};

const listarPaisById = async(req, res) => {
    const {id} = req.params;
    try {
        const pais = await Country.findById(id);
        res.status(200).json(pais); 
    } catch (error) {
        res.status(500).json({message: error.message});          
    }
};

//Esta funcion se encarga de grabar masivamente los paises en la BD
const grabacionMasiva = async(req, res) => {
    const paises = req.body;
    let xcountries = [];
    try {
        paises.forEach(async (element) => {
            let pais = {codigo: element.CODIGO, nombre: element.PAIS};
            let newPais = Country(pais);
            xcountries.push(newPais);
        });
        const existe = await Country.find().lean();
        
        existe.forEach((ele) => {
            xcountries = xcountries.filter(e => e.codigo !== ele.codigo);
        });

        if(xcountries.length > 0) {
            await Country.insertMany(xcountries);
            return res.send(xcountries);
        };
        res.status(200).json({message: "Paises Actualizados"});
        
    } catch (error) {
       res.status(500).json({message: error.message}); 
    }
};

module.exports = {
    grabarPais,
    listarPaises,
    listarPaisById,
    grabacionMasiva,
};