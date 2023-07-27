import { useNavigate } from "react-router-dom";
import CartItem from "../Components/CartItem";
import NavBar from "../Components/NavBar";
import { useSelector, useDispatch } from "react-redux";
import {
  clean_cart,
  userShopping,
} from "../Redux/ShoppingCart/shoppingCartActions";
import { Link } from "react-router-dom";
import {
  AiOutlineCheckCircle,
  AiOutlineShopping,
  AiOutlineDelete,
} from "react-icons/ai";
import { useEffect } from "react";
import React, { useContext } from "react";
import { authContext } from "../Context/authContext";

const ShoppingCart = () => {
  const { currentUser } = useContext(authContext);

  let cartItems = useSelector((state) => state.carrito.cart);
  const user = useSelector((state) => state.users.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let localStorageItems = JSON.parse(localStorage.getItem("carrito"));
  const items = user ? cartItems : localStorageItems;

  useEffect = () => {
    if (currentUser) {
      dispatch(userShopping(currentUser.uid));
    }
  };

  // const calculateTotal = (items) => {
  //   let total = 0;
  //   console.log(items);
  //   items?.forEach((item) => (total += item.price * item.quantity));
  //   return total.toFixed(2);
  // };

  function clearCart() {
    const userConfirm = window.confirm(
      "Se eliminará todo el contenido del carrito. Quieres continuar?"
    );
    if (userConfirm && !user) {
      localStorage.clear("carrito");
      navigate("/shoppingCart");
      alert("El carrito fue vaciado con éxito.");
    }
    if (userConfirm && user) {
      dispatch(clean_cart()).catch((error) => {
        alert("Oops! Algo salió mal. Intentalo nuevamente.");
      });
    } else return;
  }

  // console.log(items);

  return (
    <div>
      <div className="bg-verdeFooter ">
        <NavBar />
      </div>
      <div className="container mx-auto mt-5 px-5">
        <div className="grid grid-cols-5 gap-6">
          {/* <div className="col-span-4">
            {items?.map((el, index) => (
              <CartItem key={index} props={el} />
            ))}
            <div className="flex justify-between items-center mt-5">
              <Link
                to="/search"
                className="text-sm bg-gray-200 hover:bg-gray-300 text-gray-600 py-2 px-4 rounded flex items-center transition-colors duration-300"
              >
                <AiOutlineShopping className="mr-2" />
                Seguir comprando
              </Link>
              <button
                onClick={clearCart}
                className="text-sm bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded flex items-center transition-colors duration-300"
              >
                <AiOutlineDelete className="mr-2" />
                Vaciar carrito
              </button>
            </div>
          </div> */}

          <div className="col-span-1">
            <div className="border border-gray-200 rounded p-4">
              <h1 className="text-lg font-bold mb-4">Resumen de compra</h1>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                {/* <span>$ {calculateTotal(items)}</span> */}
              </div>
              <div className="flex justify-between mb-2">
                <span>Impuestos (10%)</span>
                {/* <span>$ {(calculateTotal(items) * 0.1).toFixed(2)}</span> */}
              </div>
              <hr className="border-t border-gray-200" />
              <div className="flex justify-between mt-2">
                <span className="font-bold">Total</span>
                <span className="font-bold">
                  {/* $ {(calculateTotal(items) * 1.1).toFixed(2)} */}
                </span>
              </div>
              <button className="bg-green-700 hover:bg-green-800 text-white py-2 px-4 mt-5 w-full rounded flex items-center justify-center transition-colors duration-300">
                <AiOutlineCheckCircle className="mr-2" />
                Completar el pago
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
