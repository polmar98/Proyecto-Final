import React from "react";

function Activities({ activity }) {
  const { Activities } = activity;

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

              <div className="flex justify-between">
                <p className="mb-2 font-small ml-2 text-gray-600">
                  Duración: {el.duration}
                </p>
                {!el.included ? (
                  <span className="font-small mb-2 mr-2">USD {el.price}</span>
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
