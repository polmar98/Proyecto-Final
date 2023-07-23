const CartItem = ({ props }) => {
  console.log(props);
  return (
    <div className="rounded-lg bg-white shadow-xl border border-teal-900 p-4 grid grid-cols-2 w-3/4 ml-10">
      <div>
        {/* <img src={props.image} alt="Img not found" className="w-2/4 h-auto" /> */}
      </div>
      <div>
        {props.items.map((el, index) => (
          <div key={index}>
            <h1>{el.title}</h1>
            <h3>USD {el.unitPrice} por persona</h3>
            <label htmlFor="">Cantidad: {el.amount}</label>
            <input
              id="number"
              type="number"
              value={el.amount}
              className="w-1/5"
            />
          </div>
        ))}
        <button>Eliminar paquete</button>
      </div>
    </div>
  );
};

export default CartItem;
