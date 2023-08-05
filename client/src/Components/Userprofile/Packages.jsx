import React, { useEffect, useContext, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { authContext } from "../../Context/authContext";
import { get_all_bills } from "../../Redux/Checkout/checkoutActions";

const Packages = () => {
  const { currentUser } = useContext(authContext);
  const dispatch = useDispatch();
  const allBills = useSelector((state) => state.checkout.allBills);

  const [showModal, setShowModal] = useState(false); // <--- añade esto

  const userBills = allBills?.filter(
    (bill) => bill.uidUser === currentUser.uid
  );

  useEffect(() => {
    if (currentUser) {
      dispatch(get_all_bills());
    }
  }, [currentUser]);

  return (
    <div className=" fontPoppins m-24">
      <div className="text-gray-800 font-bold text-2xl text-left uppercase mb-8">
        <h1>Mis viajes</h1>
      </div>
      <div className="flex flex-col items-center space-y-4 w-full">
        {userBills &&
          userBills.map((order, index) => (
            <div
              key={index}
              className="bg-verdeFooter block bg-opacity-80 rounded-xl shadow-xl p-4"
            >
              {order.ItemsBills.map((item, itemIndex) => (
                <li key={itemIndex} className="text-gray-200">
                  {item.title}
                </li>
              ))}

              <h4 className="text-gray-400">USD {order.fullValue}</h4>
              <h4 className="text-gray-400">
                Comprado el {order.createdAt.split("T")[0].toString()}
              </h4>

              <button
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => {
                  setShowModal(true);
                }}
              >
                Deja tu opinión
              </button>
            </div>
          ))}
      </div>

      {showModal && (
        <div
          class="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
        >
          <div class="py-3 sm:max-w-xl sm:mx-auto">
            <div class="bg-white min-w-1xl flex flex-col rounded-xl shadow-lg">
              <div class="px-12 py-5">
                <h2 class="text-gray-800 text-3xl font-semibold">
                  Your opinion matters to us!
                </h2>
              </div>
              <div class="bg-gray-200 w-full flex flex-col items-center">
                <div class="flex flex-col items-center py-6 space-y-3">
                  <span class="text-lg text-gray-800">
                    How was quality of the call?
                  </span>
                  <div class="flex space-x-3">
                    <svg
                      class="w-12 h-12 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      class="w-12 h-12 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      class="w-12 h-12 text-yellow-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      class="w-12 h-12 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      class="w-12 h-12 text-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                <div class="w-3/4 flex flex-col">
                  <textarea
                    rows="3"
                    class="p-4 text-gray-500 rounded-xl resize-none"
                    placeholder="Leave a message, if you want"
                  ></textarea>
                  <button
                    class="py-3 my-8 text-lg bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl text-white"
                    onClick={() => setShowModal(false)}
                  >
                    Rate now
                  </button>
                </div>
              </div>
              <div class="h-20 flex items-center justify-center">
                <a
                  href="#"
                  class="text-gray-600"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowModal(false);
                  }}
                >
                  Maybe later
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Packages;
