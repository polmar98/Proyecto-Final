import { useNavigate } from "react-router-dom";
import CartItem from "../Components/CartItem";
import { useSelector, useDispatch } from "react-redux";
// import { useState, useEffect } from "react";
import { clean_cart } from "../Redux/ShoppingCart/shoppingCartActions";

const ShoppingCart = () => {
  let cartItems = useSelector((state) => state.carrito.cart);
  console.log(cartItems);
  // const user = useSelector((state) => state.users.user);
  const user = 1;
  // console.log('el estado carrito', {carrito})
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //   const [cartState, setcartState] = useState()

  let localStorageItems = JSON.parse(localStorage.getItem("carrito")); //convierte a JS

  //vaciar el carrito
  function clearCart() {
    const userConfirm = window.confirm(
      "Se eliminará todo el contenido del carrito. Quieres continuar?"
    ); //boolean
    if (userConfirm && !user) {
      localStorage.clear("carrito");
      alert("El carrito fue vaciado con éxito.");
      navigate("/shoppingCart");
    }
    if (userConfirm && user) {
      dispatch(clean_cart()).catch((error) => {
        alert("Oops! Algo salió mal. Intentalo nuevamente.");
      });
    } else return;
  }

  return (
    <div>
      <h1>El carrito de compras</h1>
      {user
        ? cartItems?.map((el, index) => <CartItem key={index} props={el} />)
        : localStorageItems?.map((el, index) => (
            <CartItem key={index} props={el} />
          ))}
      <button>COMPLETAR EL PAGO</button>
      <button
        onClick={() => {
          navigate("/search");
        }}
      >
        SEGUIR COMPRANDO
      </button>
      <button
        onClick={() => {
          clearCart();
        }}
      >
        VACIAR CARRITO
      </button>
    </div>
  );
};

export default ShoppingCart;
