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
}

const listarPaisById = async(req, res) => {
    const {id} = req.params;
    try {
        const pais = await Country.findById(id);
        res.status(200).json(pais); 
    } catch (error) {
        res.status(500).json({message: error.message});          
    }
}

module.exports = {
    grabarPais,
    listarPaises,
    listarPaisById,
};