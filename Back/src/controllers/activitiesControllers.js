const {Activity} = require('../database');

//esta funcion trae todas las actividades
const getActivity = async () => {
   const actiDb = await Activity.findAll();
   return actiDb;
};

//esta funcion devuelve actividad buscada por ID.
const getActivityById = async (id) => {
    const idAct = Number(id);
    const actiBd = await Activity.findByPk(idAct);
    return actiBd;
};

//esta funcion devuelve actividades buscadas por el name
const searchNameActivity = async (name) => {
    const activiDb = await Activity.findAll({
        where: {
            name:name
        },
    })
    return activiDb;
};

//funcion que guarda una sola actividad
const createActivity = async (name, image, price, calification, available, idPackage) => {
    const newActivity = await Activity.create({name, image, price, calification, available, idPackage})
    console.log(newActivity);
    return newActivity;
   
};


module.exports = {
    getActivity,
    searchNameActivity,
    createActivity,
    getActivityById,
}