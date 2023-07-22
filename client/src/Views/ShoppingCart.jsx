import { useNavigate } from "react-router-dom";
import CartItem from "../Components/CartItem";
import {useSelector } from "react-redux";
// import { getPackagesById } from "../Redux/Selectors/cartSelectors";

const ShoppingCart = () => {
    const carrito = useSelector((state) => state.carrito.cart)

    console.log('el estado carrito', {carrito})
    const navigate = useNavigate()
    

    
  return (
    <div>
      <h1>El carrito de compras</h1>

         {carrito.map((el, index) => 
      <CartItem key={index} props={el}/>
      )}

      <button>COMPLETAR EL PAGO</button>
      <button onClick={()=>{navigate('/home')}}>SEGUIR COMPRANDO</button>
    </div>
  );
};

 export default ShoppingCart