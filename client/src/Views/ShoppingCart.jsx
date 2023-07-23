import { useNavigate } from "react-router-dom";
import CartItem from "../Components/CartItem";
import { useSelector, useDispatch } from "react-redux";
// import { useState, useEffect } from "react";
import { clean_cart } from "../Redux/ShoppingCart/shoppingCartActions";
import { Link } from "react-router-dom";
import { AiOutlineCheckCircle, AiOutlineShopping, AiOutlineDelete } from "react-icons/ai";


const ShoppingCart = () => {
  let cartItems = useSelector((state) => state.carrito.cart);
  const user = useSelector((state) => state.users.user)
  // console.log('el estado carrito', {carrito})
  const navigate = useNavigate();
  const dispatch = useDispatch();


//convierte a JS el localStorage
let localStorageItems = JSON.parse(localStorage.getItem("carrito"));


  //vaciar el carrito
  function clearCart() {
    const userConfirm = window.confirm(
        "Se eliminará todo el contenido del carrito. Quieres continuar?"
      ); //boolean
      if (userConfirm && !user) {
        localStorage.clear("carrito");
        navigate('/shoppingCart');
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
    <div className="grid grid-cols-4">
    <div className="w-full flex flex-col col-span-3 mt-4">
      {user
        ? cartItems?.map((el, index) => <CartItem key={index} props={el} />)
        : localStorageItems?.map((el, index) => (
            <CartItem key={index} props={el} />
          ))}

      <div className="grid grid-col-2 gap-4  justify-center ">

        <div>
        <button className="bg-green-700 hover:bg-green-800 text-white py-2 px-4 m-2 rounded w-full flex items-center justify-center">
          <AiOutlineCheckCircle className="mr-2" />
          COMPLETAR EL PAGO
        </button>
        </div>
        
        <div className="flex flex-row justify-center items-center">
        <Link
          to="/" // Update this with the path for continuing shopping
          className="bg-gray-200 hover:bg-gray-300 text-gray-600 text-xs py-2 px-4 m-2 rounded flex items-center justify-center w-1/3"
        >
          <AiOutlineShopping className="mr-2 text-2xl" />
          SEGUIR COMPRANDO
        </Link>
        <button
          onClick={() => {
            clearCart();
          }}
          className="bg-red-500 hover:bg-red-600 text-white text-xs py-2 px-4 m-2 rounded flex items-center justify-center"
        >
          <AiOutlineDelete className="mr-2 text-2xl" />
          VACIAR CARRITO
        </button>
        </div>
      </div>
    </div>

          <div className="col-span-1 mt-4">
            <div>
            <h1>Resumen de compra</h1>
            <span></span>
            </div>
            </div>

    </div>
  );
};

export default ShoppingCart;



//   return (
//     <div className="w-6/8 flex flex-col">
      
//         {user ? cartItems?.map((el, index) => (
//         <CartItem key={index} props={el} />
//            )) : localStorageItems?.map((el, index) => (
//             <CartItem key={index} props={el} />
//                ))}
        
//         <div className="inline-flex w-2/5 fontPoppins">
//       <button  className="bg-green-700 hover:bg-green-800 text-white py-1 px-1 m-2 rounded w-full">COMPLETAR EL PAGO</button>
//       <button
//         onClick={() => {
//           navigate("/");
//         }}
//         className="bg-gray-200 w-full hover:bg-gray-300 text-gray-600 font-xs py-1 px-1 m-2 rounded">
//         SEGUIR COMPRANDO
//       </button>
//       <button onClick={() => {clearCart()}} className="bg-red-500 w-full hover:bg-red-600 text-white font-xs py-1 px-1 m-2 rounded">VACIAR CARRITO</button>
//       </div>
//     </div>

//   );
// };

// export default ShoppingCart;
