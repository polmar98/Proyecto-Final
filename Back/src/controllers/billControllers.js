const {Bill, ItemsBill, ShoppingCar, ItemsShoppingCar} = require("../database");
const { Association } = require("sequelize");

//esta funcion agrega una nueva factura
const addBill = async(datos) => {
    const {idCar, idPaypal, account_id} = datos;
    if(!idCar || !idPaypal || !account_id) return {message: "Datos Incompletos"};
    //traemos la info del carrito a grabar en la nueva factura
    const car = await ShoppingCar.findByPk(idCar);
    //validamos si el valor total de la factura es mayor que cero
    if(car.fullValue === 0) return {message: "Valor a facturar no puede ser cero"};
    //validamos si la transaccion fue completada
    if(car.state === 0) return {message: "No se ha completado el pago"};

    //traemos el ultimo consecutivo numeracion factura 
    let numero = "000000";
    const facturas = await Bill.findAll();
    facturas.forEach(ele => {
       if(ele.number > numero) numero = ele.number;
    });
    const n = Number(numero) + 1;
    let num = "000000"+n.toString();
    const lo = num.length;
    const consecu = num.substring(lo-6);
    const impuesto = car.fullValue*10/100;
    const vtotal = Number(car.fullValue) + Number(impuesto);
    //generamos el objeto para insertar el nuevo registro
    const newBill = {
        number: consecu,
        subtotal: car.fullValue,
        taxes: impuesto,
        fullValue: vtotal,
        uidUser: car.uidUser,
        idUser: car.idUser,
        idPaypal,
        account_id,
    };
    //grabamos nuevo registro en tabla Bill
    const nBill = await Bill.create(newBill);
    //cargamos los items del carrito
    const items = await ItemsShoppingCar.findAll({where: {idShoppingCar: idCar}});

    //almacenamos los nuevos registros de la factura
    let array = [];
    items.forEach(e => {
       const obj = {
          amount: e.amount,
          unitPrice: e.unitPrice,
          totalPrice: e.amount * e.unitPrice,
          typeProduct: e.typeProduct,
          idProduct: e.idProduct,
          title: e.title,
          idBill: nBill.id,
       };
       array.push(obj);
    });

    const itemsGrabados = ItemsBill.bulkCreate(array);
    //ahora vaciamos el carrito de compras
    await emptyShoppingCar(idCar);
    await ShoppingCar.update({state: 0, idTransaction: null, fullValue: 0}, {where: {id: idCar}});
    //devolvemos la factura grabada
    return getBillById(nBill.id);
};


//esta funcion devuelve una factura por su ID
const getBillById = async(id) => {
   if(!id) return {message: "Id no definido"};
   const idBill = Number(id);
   const fact = await Bill.findByPk(idBill, {
      include: [
         {model: ItemsBill},
         {association: "User", attributes: ['name', 'lastName', 'email', 'address', 'phoneNumber', 'dni']},
   ]});
   return fact;
};


//esta ruta vacia completamente el carrito
const emptyShoppingCar = async (id) => {
    const idCar = Number(id);
    const registros = await ItemsShoppingCar.destroy({
      where: { idShoppingCar: idCar },
    });
    const actualizado = await ShoppingCar.update(
        { fullValue: 0 }, { where: { id: idCar } });
    const car = await ShoppingCar.findByPk(idCar, {
      include: { model: ItemsShoppingCar },
    });
    return car;
  };


  //esta ruta devuelve todas las facturas grabadas
  const getAllBill = async() => {
     const facturas = await Bill.findAll({ include:
       [
         {model: ItemsBill},
         {association: "User", attributes: ['name', 'lastName', 'email', 'address', 'phoneNumber', 'dni']},

      ]});
     return facturas;
  };

module.exports = { addBill, getBillById, getAllBill };