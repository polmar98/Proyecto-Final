const {ShoppingCar, ItemsShoppingCar} = require('../database');

const addShoppingCar = async(carrito) => {
   const {idUser, items, fullValue} = carrito;
   if(!idUser || !items || !fullValue) {
      return "Datos Incompletos";
   };
   const newCar = await ShoppingCar.create({idUser, fullValue});
   //ahora agregamos los items del carrito
   items.forEach(async(element) => {
      if(!element.amount || !element.unitPrice || !element.totalPrice
        || !element.typeProduct || !element.idProduct || !element.title) {
            return "Datos del paquete Incompletos";
        }
        newItem = {amount: element.amount,
                   unitPrice: element.unitPrice,
                   totalPrice: element.totalPrice,
                   typeProduct: element.typeProduct,
                   idProduct: element.idProduct,
                   title: element.title,
                   idShoppingCar: newCar.id};
        const itemAdd = await ItemsShoppingCar.create(newItem);           
   });
   return "Carrito almacenado exitosamente";
};

module.exports = { addShoppingCar};