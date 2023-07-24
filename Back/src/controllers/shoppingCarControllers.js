const {ShoppingCar, ItemsShoppingCar, Package} = require('../database');

//esta funcion calcula el valor total y actualiza en el fullValue del carrito
const updateTotal = async(idCar) => {
   const items = await ItemsShoppingCar.findAll({where: {idShoppingCar: idCar}});
   let suma = 0;
   items.forEach(ele => {
      suma += ele.amount * ele.unitPrice;
   });
   try {
      const actualizado = await ShoppingCar.update({fullValue: suma}, {where: {id: idCar}});
      return true;
   } catch (error) {
      return false;      
   }
};

//esta rutina devuelve el carrito de compras que el usuario tenga guardado y pendiente
const getShoppingCar = async(id) => {
   if(!id)  return  {message: "Usuario No definido" };
   const idU = Number(id);

   //buscamos carrito pendiente
   const carrito = await ShoppingCar.findOne({
      where: {idUser: idU, state: 0},
      include: {model: ItemsShoppingCar},
   });

   if(carrito == null) return {message: "Usuario No tiene Carrito registrado"};
   return carrito;
};

//esta funcion agrega items al carrito existente
const addItemsShoppingCar = async(item, id) => {
   const {amount, unitPrice, totalPrice, typeProduct, idProduct, title, image} = item;

   if(!amount || !unitPrice || !totalPrice || !typeProduct 
      || !idProduct || !title || !id || !image) {
      return {message: "Informacion Incompleta"};
   };

   const idCar = Number(id);
   //buscamos si ya existe el articulo dentro de los ya grabados
   const existe = await ItemsShoppingCar.findOne({ where: {idShoppingCar: idCar, typeProduct, idProduct}}) ;
   const newItem = {amount, unitPrice, totalPrice,
                    typeProduct, idProduct, title, image, idShoppingCar: idCar};

   //si no existe lo agregamos a los items
   if(existe == null){
      const itemAdd = await ItemsShoppingCar.create(newItem); 
      const carUpdate = await updateTotal(idCar);
      return {message: "Registro agregado al carrito"};
   } else {
     //si ya existe actualizamos la cantidad
     const rows = ItemsShoppingCar.update(item, {where: {id: existe.id}});
     const carUpdate = await updateTotal(idCar);
     return {message: "Registro Modificado"};
   };
};


//esta funcion crea un carrito nuevo para el usuario registrado
const addShoppingCar = async(id) => {
   if(!id) return {message: "Id de Usuario No definido"};
   const idU = Number(id);

   const [newCar, created] = await ShoppingCar.findOrCreate({where: 
      {state: 0, idBill: 0, fullValue: 0, idUser: idU}
   });
   return {idcar: newCar.id};

};



//esta rutina elimina items del carrito de compras
const deleteItemsShoppingCar = async(item) => {
   if(!item.idProduct || !item.typeProduct || !item.idShoppingCar ) {
      return "Datos Incompletos para la eliminacion";
   };

   console.log(item);
   //eliminamos los items del carro de compras
   const existe = await ItemsShoppingCar.findOne({ 
      where: {idShoppingCar: item.idShoppingCar,
              typeProduct: item.typeProduct,
              idProduct: item.idProduct}}) ;
   if(existe !== null){ await existe.destroy()};
   //actualizamos el nuevo valor del carrito de compras
   const carUpdate = updateTotal(item.idShoppingCar);
   return "Registro eliminado";
};

//esta rutina devuelve el carrito identificado por el ID
const getShoppingCarById = async(id) => {
   if(!id) { return  "Id No definido" };
   const idCar = Number(id);
   //buscamos carrito pendiente
   const carUpdate = await updateTotal(idCar);
   const carrito = await ShoppingCar.findByPk(idCar, {
      include: {model: ItemsShoppingCar},
   });
   return carrito;
};

//esta rutina devuelve todos los carritos filtrados por un query
const getAllShoppingCar = async(xquery) => {
   const carritos = await ShoppingCar.findAll({where: xquery});
   return carritos;
};

//esta ruta vacia completamente el carrito
const emptyShoppingCar = async(id) => {
   const idCar = Number(id);
   const registros = await ItemsShoppingCar.destroy({where: {idShoppingCar: idCar}});
   const carUpdate = await updateTotal(idCar);
   return {message: "Carrito Vaciado"};
};


module.exports = { addShoppingCar,
                   getShoppingCar,
                   addItemsShoppingCar,
                   deleteItemsShoppingCar,
                   getShoppingCarById,
                   getAllShoppingCar,
                   emptyShoppingCar};