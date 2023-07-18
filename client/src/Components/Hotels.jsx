// import React, { useEffect }  from "react";
// import { useSelector } from "react-redux";

// function Hotels() {
//   const tour = useSelector((state) => state.packages.packageData);

//   useEffect(() => {

//   })

//   return (
//     <div>
//           <div>
//             <h1 className="text-4xl font-bold">{tour.Hotel.name}</h1>
//             <h3 className="text-xl">{tour.Hotel.stars} estrellas</h3>
//             <h3 className="text-xl">Calificación: {tour.Hotel.calification}</h3>
//             <h3 className="text-xl">Pensión Completa</h3>
//           </div>

//           <div className="grid grid-flow-col place-content-center my-1 ">
//             {tour.Hotel.image.map((el, index) => (
//               <img
//                 key={index}
//                 src={el}
//                 alt="Img not found"
//                 className="w-[400px] h-[300px] rounded-lg"
//               />
//             ))}
//           </div>

//           <h2>{tour.Hotel.details}</h2>
        
//     </div>
//   );
// }

// export default Hotels;
