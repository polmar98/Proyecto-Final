import React, { useContext} from "react";
import { authContext } from "../Context/authContext";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi"; // Import the trash icon from react-icons
import { remove_one_from_cart } from "../Redux/ShoppingCart/shoppingCartActions";


// const CartItem = ({ props }) => {
//   const user = useSelector((state) => state.users.user);
//   const navigate = useNavigate();

//   function clearItem() {
//     const userConfirm = window.confirm(
//       "Se elimirá este item del carrito, quieres continuar?"
//     );
//     if (userConfirm && !user) {
//       let localStorageJSON = localStorage.getItem("carrito");
//       // console.log('JSON', localStorageJSON)
//       let storedItems = [];
//       if (localStorageJSON !== null) {
//         storedItems = JSON.parse(localStorageJSON); //convierte a JS
//         // console.log('js', storedItems)
//       }
//       const filteredCart = storedItems.filter((item) => item.id !== props.id);
//       const updatedItemsJSON = JSON.stringify(filteredCart);
//       localStorage.setItem("carrito", updatedItemsJSON); //lo convierte a json
//     }
//     navigate("/shoppingCart");
//   }

//   return (

//     <div className="rounded-lg bg-white shadow-xl border border-green-500 p-4 grid grid-cols-2 w-full justify-center mb-4">
//       <div>
//         <img
//           src={props.image}
//           alt="Img not found"
//           className="w-3/4 h-auto justify-center align-middle rounded"
//         />
//       </div>
//       <div className="flex flex-col justify-between text-left">
//         <div>
//           <h1 className="text-xl font-semibold">{props.title}</h1>
//           <h3 className="text-green-700">USD {props.price} por persona</h3>
//         </div>

//         <div className="w-auto h-auto mt-2">
//           <label className="text-green-700 font-semibold">Cantidad:</label>
//           <input
//             id="number"
//             type="number"
//             value={props.amount}
//             className="w-1/5 border border-gray-300 rounded-md px-2 py-1 ml-2"
//           />
//         </div>

//         <div className="mt-2">
//         <h3 className="text-green-700 font-semibold">Agrega actividades</h3>
//           {/* <select className="border border-gray-300 rounded-md px-2 py-1 ml-2"> */}
//           <ul>
//             {props.activities.map((el) =>
//               !el.included ?
//                 <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
//                 <div className="flex items-center pl-3">
//                     <input id={el.id} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
//                     <label for={el.id} className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{el.name} por USD{el.price}</label>
//                 </div>
//                 </li> : null)
//             }
//             </ul>

//         </div>
//         <button
//           onClick={() => {
//             clearItem();
//           }}
//           className=" text-right w-14 mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-2 rounded-md flex items-center justify-center"
//         >
//           <FiTrash2 className="mr-2" />
//         </button>

const CartItem = ({ props }) => {
  const { currentUser } = useContext(authContext);
  const dispatch = useDispatch()
  console.log(props);

  const navigate = useNavigate();
  // const user = useSelector((state) => state.users.user);

  function clearItem(itemToRemove) {
    const userConfirm = window.confirm(
      "Se eliminará este item del carrito, quieres continuar?"
    );

    if (userConfirm && !currentUser) {
      let localStorageJSON = localStorage.getItem("carrito");
      let storedItems = [];
      if (localStorageJSON !== null) {
        storedItems = JSON.parse(localStorageJSON);
      }

      const filteredCart = storedItems.filter(
        (item) => item.items[0].idProduct !== itemToRemove.idProduct
      );

      const updatedItemsJSON = JSON.stringify(filteredCart);
      localStorage.setItem("carrito", updatedItemsJSON);
    }
    else if (userConfirm && currentUser) {
      dispatch(remove_one_from_cart(itemToRemove));
    } else return;

    navigate("/shoppingCart");
  }

  return (
    <div className="bg-white shadow-xl rounded-lg p-6 m-4">
      
          <div
            className="flex items-center justify-between border-b-2 border-gray-200 py-4"
          >
            {/* Agregué un contenedor para la imagen y el título del producto */}
            <div className="flex items-center">
              <img
                src={props.image}
                alt={props.title}
                className="w-20 h-20 object-cover rounded-lg mr-4"
              />
              <h2 className="text-lg">{props.title}</h2>
            </div>

            {/* Agregué un contenedor para la cantidad y el precio */}
            <div className="flex items-center">
              <div className="mr-4">
                <label className="block text-sm">
                  Cantidad:
                </label>
                <input
                  type="number"
                  min="1"
                  value={props.amount}
                  className="w-16 mt-1 border rounded-md p-1"
                />
              </div>
              <div>
                <p className="text-sm">Precio:</p>
                <p className="text-lg font-semibold">USD {props.unitPrice}</p>
              </div>
            </div>

            {/* Botón de eliminar */}
            <button
              className="text-red-500 hover:text-red-700 transition duration-150 ease-in-out"
              onClick={() => clearItem(props)}
            >
              <FiTrash2 size={24} />
            </button>
          </div>
    </div>
  );
};

export default CartItem;
