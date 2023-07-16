const {Activity} = require('../database');


const getActivity = async () => {
   const actiDb = await Activity.findAll();
   return actiDb;
}

const searchNameActivity = async (name) => {
    const activiDb = await Activity.findAll({
        where: {
            name:name
        },
    })

    return activiDb;
}

const createActivity = async (name, image, price, calification, available) => {
    const newActivity = await Activity.create({name, image, price, calification, available})
console.log(newActivity);
    return newActivity;
    
}


module.exports = {
    getActivity,
    searchNameActivity,
    createActivity
}