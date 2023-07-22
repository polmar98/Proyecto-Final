const CartItem = ({props}) => {

    return(
    
        <div className="rounded-lg bg-white shadow-xl border border-teal-900 p-4 grid grid-cols-2 w-3/4 ml-10">
            <div>
            <img src={props.image} alt='Img not found' className="w-2/4 h-auto"/>
            </div>
            <div>
            <h1>{props.title}</h1>
            <h3>USD {props.price} por persona</h3>

            <div className="w-auto h-auto">
            <label>Cantidad:</label>
            <input id="number" type="number" value={props.amount} className="w-1/5"/>
            </div>

            <div>
            <label>Agrega actividades: </label>
            <select>
            {props.activities.map(el =>
                <option key={el.id}>{el.name} por USD{el.price}</option>)}

            </select>
            </div>
            </div>
        </div>
    
    )
};

export default CartItem