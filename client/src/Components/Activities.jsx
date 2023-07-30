import React from "react";
import { toast } from "react-toastify";

function Activities({ activity, addNew }) {
  const { Activities } = activity;
  // const user = useSelector((state) => state.users.user);
  // const { addNewItem } = addNewItem;
  console.log("actividades en Act: ", Activities); // aca llegan las 4 actividades

  const handleReserveActivity = (selectedActivity) => {
    addNew(selectedActivity);
  };
  return (
    <>
      <h2 className="text-xl font-bold mb-4 mt-12 text-left fontPoppins">
        Actividades
      </h2>
      <div className="grid grid-cols-2 gap-4 mt-8">
        {Activities?.map((el) => (
          <div
            key={el.id}
            className="block rounded-lg bg-white shadow-xl border border-gray-300 p-4 card hover:scale-110 hover:z-20"
          >
            <a href="#!">
              <img
                className="rounded-t-lg w-full h-auto"
                src={
                  el.image
                    ? el.image
                    : "https://uss.com.ar/sitio/wp-content/themes/consultix/images/no-image-found-360x260.png"
                }
                alt="Img not found"
              />
            </a>
            <div className="text-center fontPoppins">
              <h5 className="mb-4 mt-2 text-m font-bold leading-tight text-gray-800">
                {el.name}
              </h5>

              <div>
                {!el.included ? (
                  <div>
                    <span className="text-lg fontPoppinsB  mr-2 text-red-600 mb-4">
                      Reservalo YA pagando solo USD {el.price}!!!
                    </span>
                    <div className="flex justify-between">
                      <p className=" text-sm ml-2 text-gray-600">
                        Duración: {el.duration}
                      </p>
                    </div>
                    <div>
  
                      <button
                        onClick={() => {
                          handleReserveActivity({
                            amount: 1,
                            unitPrice: el.price,
                            totalPrice: el.price,
                            typeProduct: 2,
                            idProduct: el.id,
                            title: el.name,
                            image: el.image,
                          });
                          toast.success("Actividad reservada");
                        }}
                        className="p-1 text-yellow-500 fontPoppinsB scale-150 rounded bg-red-600 hover:rotate-12 transition "
                      >
                        Reservar
                      </button>
                      {/* </Link> */}
                    </div>
                  </div>
                ) : (
                  <span>Actividad incluida</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Activities;
