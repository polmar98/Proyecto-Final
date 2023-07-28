const { ShoppingCar, ItemsShoppingCar, Package, User } = require("../database");

//esta funcion calcula el valor total y actualiza en el fullValue del carrito
const updateTotal = async (idCar) => {
  const items = await ItemsShoppingCar.findAll({
    where: { idShoppingCar: idCar },
  });
  let suma = 0;
  items.forEach((ele) => {
    suma += ele.amount * ele.unitPrice;
  });
  try {
    const actualizado = await ShoppingCar.update(
      { fullValue: suma },
      { where: { id: idCar } }
    );
    return true;
  } catch (error) {
    return false;
  }
};

//esta rutina devuelve el carrito de compras que el usuario tenga guardado y pendiente
const getShoppingCar = async (uid) => {
  if (!uid) return { message: "Usuario No definido" };

  //buscamos carrito pendiente
  const carrito = await ShoppingCar.findOne({
    where: { uidUser: uid, state: 0 },
    include: { model: ItemsShoppingCar },
  });

  if (carrito == null)
    return { message: "Usuario No tiene Carrito registrado" };
  return carrito;
};

//esta funcion agrega items al carrito existente
const addItemsShoppingCar = async (item, id) => {
  const {
    amount,
    unitPrice,
    totalPrice,
    typeProduct,
    idProduct,
    title,
    image,
  } = item;

  if (
    !amount ||
    !unitPrice ||
    !totalPrice ||
    !typeProduct ||
    !idProduct ||
    !title ||
    !id ||
    !image
  ) {
    return { message: "Informacion Incompleta" };
  }

  const idCar = Number(id);
  //buscamos si ya existe el articulo dentro de los ya grabados
  const existe = await ItemsShoppingCar.findOne({
    where: { idShoppingCar: idCar, typeProduct, idProduct },
  });
  const newItem = {
    amount,
    unitPrice,
    totalPrice,
    typeProduct,
    idProduct,
    title,
    image,
    idShoppingCar: idCar,
  };

  //si no existe lo agregamos a los items
  if (existe == null) {
    const itemAdd = await ItemsShoppingCar.create(newItem);
    const carUpdate = await updateTotal(idCar);
  } else {
    //si ya existe actualizamos la cantidad
    const rows = ItemsShoppingCar.update(item, { where: { id: existe.id } });
    const carUpdate = await updateTotal(idCar);
  };
  //hora devolvemos todo la info del carrito actualizada
  const newCar = await ShoppingCar.findByPk(idCar, {
    include: { model: ItemsShoppingCar }
  });
  return newCar;
};

//esta funcion crea un carrito nuevo para el usuario registrado
const addShoppingCar = async (uid) => {
  if (!uid) return { message: "Uid de Usuario No definido" };

  // Busca el usuario por uid
  const user = await User.findOne({ where: { uid: uid } });

  if (!user) return { message: "Usuario no encontrado" };

  // Usa el uid del usuario para crear el carrito de compras
  const [newCar, created] = await ShoppingCar.findOrCreate({
    where: { state: 0, idBill: 0, fullValue: 0, uidUser: uid, idUser: user.id },
  });

  return { idcar: newCar.id };
};

//esta rutina elimina items del carrito de compras
const deleteItemsShoppingCar = async (item) => {
  if (!item.idProduct || !item.typeProduct || !item.idShoppingCar) {
    return "Datos Incompletos para la eliminacion";
  }

  console.log(item);
  //eliminamos los items del carro de compras
  const existe = await ItemsShoppingCar.findOne({
    where: {
      idShoppingCar: item.idShoppingCar,
      typeProduct: item.typeProduct,
      idProduct: item.idProduct,
    },
  });
  if (existe !== null) {
    await existe.destroy();
  }
  //actualizamos el nuevo valor del carrito de compras
  const carUpdate = updateTotal(item.idShoppingCar);
  //hora devolvemos todo la info del carrito actualizada
  const idCar=item.idShoppingCar;
  const newCar = await ShoppingCar.findByPk(idCar, {
    include: { model: ItemsShoppingCar }
  });
  return newCar;
};

//esta rutina devuelve el carrito identificado por el UID del usuario
const getShoppingCarById = async (uid) => {
  if (!uid) return { message: "Uid de Usuario No definido" };

  // Busca el carrito por uidUser
  const car = await ShoppingCar.findOne({ where: { uidUser: uid, state: 0 } });

  if (!car) return { message: "Carrito no encontrado" };

  return { idcar: car.id };
};

//esta rutina devuelve todos los carritos filtrados por un query
const getAllShoppingCar = async (xquery) => {
  const carritos = await ShoppingCar.findAll({ where: xquery });
  return carritos;
};

//esta ruta vacia completamente el carrito
const emptyShoppingCar = async (id) => {
  const idCar = Number(id);
  const registros = await ItemsShoppingCar.destroy({
    where: { idShoppingCar: idCar },
  });
  const carUpdate = await updateTotal(idCar);
  return { message: "Carrito Vaciado" };
};

module.exports = {
  addShoppingCar,
  getShoppingCar,
  addItemsShoppingCar,
  deleteItemsShoppingCar,
  getShoppingCarById,
  getAllShoppingCar,
  emptyShoppingCar,
};
