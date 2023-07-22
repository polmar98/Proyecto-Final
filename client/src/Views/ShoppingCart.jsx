import { useNavigate } from "react-router-dom";
import CartItem from "../Components/CartItem";
import { useSelector, useDispatch } from "react-redux";
// import { useState, useEffect } from "react";
import { clean_cart } from "../Redux/ShoppingCart/shoppingCartActions";


const ShoppingCart = () => {
  let cartItems = useSelector((state) => state.carrito.cart);
  const user = useSelector((state) => state.users.user)
  // console.log('el estado carrito', {carrito})
  const navigate = useNavigate();
  const dispatch = useDispatch();
//   const [cartState, setcartState] = useState()

// let localStorageItems = JSON.parse(localStorage.getItem("carrito")); //convierte a JS
// let arrlocalStorageItems =[];
// console.log('lo que pusheo', arrlocalStorageItems.push(...arrlocalStorageItems, localStorageItems))

// console.log('items parseados', arrlocalStorageItems)
   
// if (!user) {

    // if (localStorageItems.length >= 1) {
    //   cartItems.push(localStorageItems);
    // }



// console.log('items del carrito', cartItems)


  //vaciar el carrito
  function clearCart() {
    const userConfirm = window.confirm(
        "Se eliminará todo el contenido del carrito. Quieres continuar?"
      ); //boolean
      if (userConfirm && !user) {
        localStorage.clear("carrito");
        alert("El carrito fue vaciado con éxito.");
      } 
      if (userConfirm && user) {
         dispatch(clean_cart()).catch((error) => {
          alert('Oops! Algo salió mal. Intentalo nuevamente.')
        });
      }
      else return;
  }



  return (
    <div>
      <h1>El carrito de compras</h1>
        {cartItems?.map((el, index) => (
        <CartItem key={index} props={el} />
           ))}
        
      <button>COMPLETAR EL PAGO</button>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        SEGUIR COMPRANDO
      </button>
      <button onClick={() => {clearCart()}}>VACIAR CARRITO</button>
    </div>
  );
};

export default ShoppingCart;
