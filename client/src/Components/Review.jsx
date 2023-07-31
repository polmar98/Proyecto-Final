import React from "react";
// import { useSelector } from "react-redux";

function Review({coments}) {
  const {reviewData} = coments
//   console.log('review en componente', reviewData)

  return (
    <div className="flex fontPoppins mt-10">
      <div>
        <h1 className="text-xl font-bold text-left">Testimonios</h1>
        <div className="grid grid-cols-2 gap-2 mt-8">
        <div className="col-span-1">
        <h4 className="font-semibold text-left ">Carla Barchi</h4>
        <p className="text-xs font-semibold text-left">Este viaje lo hicimos en familia. Estuvo todo muy bien planeado, no tuvimos ninguna complicación. Lo recomiendo, sin dudas volveremos!</p>
        </div>
        <div className="col-span-1">
        <h4 className="font-semibold text-left">Martín Sanchez</h4>
        <p className="text-xs font-semibold text-left">Viajamos con mi pareja. El hotel fue espectacular! Con un gran desayuno. El viaje en general super recomendable. Volvimos felices! </p>
        </div>

        </div>
      </div>
      {reviewData?.map((el) => (
        <div key={el.uidUser} clasName="inline-flex flex-row">
          <h4 className="text-2xl font-sans font-bold">{el.Usuario}</h4>
          <h4 className="text-xl font-sans font-light">{el.Fecha}</h4>
           <p className="text-xl font-sans font-semibold">{el.testimony}</p>

        </div>
      ))}
    </div>
  );
}

export default Review;
