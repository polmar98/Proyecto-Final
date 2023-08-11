import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AiOutlineEdit, AiOutlineSave } from "react-icons/ai";
import { put_activity } from "../Redux/Activity/activityActions";

function ActivitiesAdmin({ tour }) {
  const dispatch = useDispatch();

  const [editingActivityId, setEditingActivityId] = useState(null);
  const [activityInputs, setActivityInputs] = useState({});

  const handleInputChange = (event, activityId) => {
    const { name, value, type, checked } = event.target;
  
    if (name === "price" || name === "calification") {
      setActivityInputs((prevInputs) => ({
        ...prevInputs,
        [activityId]: {
          ...prevInputs[activityId],
          [name]: parseFloat(value),
        },
      }));
    } else if (type === "checkbox") {
      setActivityInputs((prevInputs) => ({
        ...prevInputs,
        [activityId]: {
          ...prevInputs[activityId],
          [name]: checked,
        },
      }));
    } else {
      setActivityInputs((prevInputs) => ({
        ...prevInputs,
        [activityId]: {
          ...prevInputs[activityId],
          [name]: value,
        },
      }));
    }
  };
       
  const handleEditActivity = (activityId) => {
    setEditingActivityId(activityId);
  };

  const handleSaveActivity = async (activityId) => {
    const activityData = activityInputs[activityId];
    if (activityData) {
      try {
        await dispatch(put_activity(activityId, activityData));
        setEditingActivityId(null);
      } catch (error) {
        console.error("Error updating activity:", error);
      }
    }
  };

  return (
    <div>
      {tour.Activities?.map((activity) => (
        <div
          key={activity.id}
          className="block rounded-lg bg-white shadow-xl border border-gray-300 p-4 card transform hover:scale-105 hover:z-10 transition-all duration-200"
        >
          <a href="#!">
            <img
              className="rounded-t-lg w-full h-60 object-cover"
              src={
                activity.image ||
                "https://uss.com.ar/sitio/wp-content/themes/consultix/images/no-image-found-360x260.png"
              }
              alt="Activity"
            />
          </a>
          <div className="mt-4 text-center fontPoppins">
            <h5 className="text-lg font-bold leading-tight text-gray-800">
              {activity.name}
            </h5>
            {editingActivityId === activity.id ? (
              <div>
                <label className="block mb-2 text-sm font-bold text-gray-600">
                  Precio USD:
                </label>
                <input
                  type="number"
                  name="price"
                  min="0"
                  value={
                    activityInputs[activity.id]?.price !== undefined
                      ? activityInputs[activity.id].price
                      : activity.price
                  }
                  onChange={(e) => handleInputChange(e, activity.id)}
                  className="w-3/4 px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 fontPoppins text-sm"
                />
                <label className="block mb-2 text-sm font-bold text-gray-600">
                  Incluido:
                </label>
                <input
                  type="checkbox"
                  name="included"
                  checked={
                    activityInputs[activity.id]?.included !== undefined
                      ? activityInputs[activity.id].included
                      : activity.included
                  }
                  onChange={(e) => handleInputChange(e, activity.id)}
                />
                <label className="block mb-2 text-sm font-bold text-gray-600">
                  Disponible:
                </label>
                <input
                  type="checkbox"
                  name="available"
                  checked={
                    activityInputs[activity.id]?.available !== undefined
                      ? activityInputs[activity.id].available
                      : activity.available
                  }
                  onChange={(e) => handleInputChange(e, activity.id)}
                />
                <button onClick={() => handleSaveActivity(activity.id)}>
                  <AiOutlineSave />
                  Guardar
                </button>
              </div>
            ) : (
              <div>
                <h5 className="text-lg font-bold leading-tight text-gray-800">
                  Precio: {activity.price} USD
                </h5>
            
                <button onClick={() => handleEditActivity(activity.id)}>
                  <AiOutlineEdit />
                  Editar
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ActivitiesAdmin;




// import React from "react";
// import { useDispatch } from "react-redux";
// import { AiOutlineEdit } from "react-icons/ai";
// import { put_activity } from "../Redux/Activity/activityActions";
// import { AiOutlineSave } from "react-icons/ai";
// import { useState } from "react";
// import { useEffect } from "react";

// function ActivitiesAdmin({ tour }) {
//   const Activities = activity.Activities;
//   const [editingActivityId, setEditingActivityId] = useState(null);
//   const [activityInputs, setActivityInputs] = useState({});

//   const dispatch = useDispatch();

//   const [isEditing, setIsEditing] = useState(false);

//   const [inputEdit, setInputEdit] = useState({
//     name: activity.name,
//     duration: activity.duration,
//     image: activity.image,
//     price: activity.price,
//     calification: activity.calification,
//     available: activity.available,
//     included: activity.included,
//     totalLimit: activity.totalLimit,
//     idPackage: activity.idPackage,
//   });

//   useEffect(() => {
//     Actualiza inputEdit cuando cambian los detalles del paquete
//     setInputEdit({
//       name: activity.name,
//       duration: activity.duration,
//       image: activity.image,
//       price: activity.price,
//       calification: activity.calification,
//       available: activity.available,
//       included: activity.included,
//       totalLimit: activity.totalLimit,
//       idPackage: activity.id,
//     });
//   }, [activity]);
//   const handleInputChange = (event) => {
//     const { name, value, type } = event.target;

//     if (type === "checkbox" || type === "radio") {
//       setInputEdit((prevInput) => ({ ...prevInput, [name]: value === "true" }));
//     } else if (name === "price" || name === "totalLimit") {
//       setInputEdit((prevInput) => ({ ...prevInput, [name]: parseInt(value) }));
//     } else {
//       setInputEdit((prevInput) => ({
//         ...prevInput,
//         [name]: value || prevInput[name],
//       }));
//     }
//   };

//   const [isSaved, setIsSaved] = useState(false);

//   const handleSaveChanges = async (e) => {
//     e.preventDefault();
//     const idActivity = activity.id;
//     console.log("actvidad actualizada:", inputEdit);
//     try {
//       dispatch(put_activity(idActivity, inputEdit));
//       setIsEditing(false);
//       setIsSaved(true);
//       alert("Activity updated successfully!");
//     } catch (error) {
//       console.error("Error actualizando la actividad:", error);
//     }
//   };

//   return (
//     <>
//       <h2 className="text-xl font-bold mb-4 mt-8 text-left fontPoppins">
//         Actividades
//       </h2>
      
//       {isEditing ? (
//         <div>
          
         
//           <label className="block mb-2 text-sm font-bold text-gray-600">
//             Precio USD:
//           </label>
//           <input
//             type="number"
//             name="price"
//             min="0"
//             value={inputEdit.price}
//             onChange={handleInputChange}
//             className="w-3/4 px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 fontPoppins text-sm"
//           />
         

//           <label className="block mb-2 text-sm font-bold text-gray-600">
//             Incluido:
//           </label>

//           <label>
//             <input
//               type="radio"
//               name="included"
//               value={true}
//               checked={inputEdit.included === true}
//               onChange={handleInputChange}
//             />
//             Sí
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="included"
//               value={false}
//               checked={inputEdit.included === false}
//               onChange={handleInputChange}
//             />
//             No
//           </label>
//           <div>
//             <label className="block mb-2 text-sm font-bold text-gray-600">
//               Disponible:
//             </label>
//             <div className="flex space-x-2">
//               <label>
//                 <input
//                   type="radio"
//                   name="available"
//                   value={true}
//                   checked={inputEdit.available === true}
//                   onChange={handleInputChange}
//                 />{" "}
//                 Sí
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="available"
//                   value={false}
//                   checked={inputEdit.available === false}
//                   onChange={handleInputChange}
//                 />{" "}
//                 No
//               </label>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="grid grid-cols-2 gap-4 mt-8">
//           {Activities?.map((activity) => (
//             <div
//               key={activity.id}
//               className="block rounded-lg bg-white shadow-xl border border-gray-300 p-4 card transform hover:scale-105 hover:z-10 transition-all duration-200"
//             >
//               <a href="#!">
//                 <img
//                   className="rounded-t-lg w-full h-60 object-cover"
//                   src={
//                     activity.image
//                       ? activity.image
//                       : "https://uss.com.ar/sitio/wp-content/themes/consultix/images/no-image-found-360x260.png"
//                   }
//                   alt="Activity"
//                 />
//               </a>
//               <div className="mt-4 text-center fontPoppins">
//                 <h5 className="text-lg font-bold leading-tight text-gray-800">
//                   {activity.name}
//                 </h5>
//                 <h5
//                   name="price"
//                   className="text-lg font-bold leading-tight text-gray-800"
//                 >
//                   Precio: {activity.price} USD
//                 </h5>
//                 <p className="text-gray-500">
//                   {!activity.included
//                     ? `Duración: ${activity.duration}`
//                     : "Actividad incluida"}
//                 </p>

//                 <button onClick={() => setIsEditing(true)}>
//                   <AiOutlineEdit />
//                   Editar
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//       <button
//         type="button"
//         className="bg-red-600 hover:bg-gray-500 rounded flex flex-row justify-between item-center p-2 m-2 mt-3 px-3 py-2 text-white focus:outline-none ml-14 fontPoppins "
//         onClick={handleSaveChanges}
//         disabled={isSaved}
//       >
//         <AiOutlineSave size={22} color="white" />{" "}
//         {isSaved ? "Guardado" : "Guardar"}
//       </button>
//     </>
//   );
// }

// export default ActivitiesAdmin;
