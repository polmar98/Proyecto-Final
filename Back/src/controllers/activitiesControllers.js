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
const createActivity = async (name, image, price, included, duration, idPackage) => {
    
   try{
    const newActivity = await Activity.create({name, image, price, included, duration, idPackage})
   }catch (error) {
    console.error(error.message);
  }
   
};

//funcion para borrar actividades
const deleteActivity = async (id) => {
     await Activity.destroy({ where: { id: id,}, });
    const deleteActivity = await Activity.findAll();
    return deleteActivity;
}


//funcion para editar actividades
const updateActivity = async (id, newData) => {
    // Utiliza el método update de Sequelize para modificar los datos en la base de datos
    await Activity.update(newData, {
      where: { id: id },
    });
    
    // Después de la actualización, obtén los datos actualizados
    const updatedActivity = await Activity.findByPk(id);
    return updatedActivity;
  };
  




module.exports = {
    getActivity,
    searchNameActivity,
    createActivity,
    getActivityById,
    deleteActivity,
    updateActivity,
}


