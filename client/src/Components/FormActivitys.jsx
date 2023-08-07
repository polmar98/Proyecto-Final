import React, { useState,useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { AiOutlineCloseSquare, AiOutlineSave } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { fetchPackages } from "../Redux/Packages/packagesActions";
import { addActivities } from "../Redux/Activity/activityActions";

import axios from "axios";

export default function FormActivity({onHideForm,lastCreatedPackage}) {

  const dispatch =useDispatch()

  const packages = useSelector((state) => state.packages.packagesList)

  console.log(packages)

  useEffect(()=>{
    dispatch(fetchPackages())
  },[dispatch])


  const [activities, setActivities] = useState([
    {
      name: "",
      image: "",
      price: 0,
      included: false,
      duration: "",
      activate:true,
      idPackage:lastCreatedPackage
    },
  ]);


  const [isSaved, setIsSaved] = useState(false);

  const handleSaveActivities = () => {
    try {
      // Aquí creas la estructura de las actividades que deseas enviar al servidor
      const newActivities = activities.map((activity) => ({
        name: activity.name,
        image: activity.image,
        price: activity.price,
        included: activity.included,
        duration: activity.duration,
        activate: activity.activate,
        idPackage: activity.idPackage,
      }));
  
      // Despachar la acción para guardar las actividades
       dispatch(addActivities(newActivities));
      
      // Marcar como guardado
      setIsSaved(true);
    } catch (error) {
      console.error("Error al guardar las actividades:", error);
    }
  };
  

  const handleNameChange = (index, e) => {
    const newActivities = [...activities];
    newActivities[index].name = e.target.value;
    setActivities(newActivities);
  };

  const handleImageChange = (index, e) => {
    const file = e.target.files[0];

    const cloudName = "dro5aw3iy";
    const uploadPreset = "images";

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    const uploadImage = async () => {
      try {
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (response.status === 200) {
          const newActivities = [...activities];
          newActivities[index].image = response.data.secure_url;
          setActivities(newActivities);
        } else {
          console.error("Error al cargar la imagen en Cloudinary");
        }
      } catch (error) {
        console.error("Error al cargar la imagen:", error);
      }
    };

    uploadImage();
  };

  const handlePriceChange = (index, e) => {
    const newActivities = [...activities];
    newActivities[index].price = parseFloat(e.target.value);
    setActivities(newActivities);
  };

  const handleIncludedChange = (index, e) => {
    const newActivities = [...activities];
    newActivities[index].included = e.target.checked;
    setActivities(newActivities);
  };

  const handleDurationChange = (index, e) => {
    const newActivities = [...activities];
    newActivities[index].duration = e.target.value;
    setActivities(newActivities);
  };

  const handleAddActivity = () => {
    const newActivity = {
      name: "",
      image: "",
      price: 0,
      included: false,
      duration: "",
      activate:true,
      idPackage:0
    };
    setActivities([...activities, newActivity]);
  };


  const handleRemoveActivity = (index) => {
    const newActivities = [...activities];
    newActivities.splice(index, 1);
    setActivities(newActivities);
  };

  const handlePackageChange = (e) => {
    const newActivities = activities.map((activity) => ({
      ...activity,
      idPackage: e.target.value,
    }));
    setActivities(newActivities);
  };
  
  function handleCancel() {
    onHideForm(); // Llama a la función para ocultar el formulario sin enviar datos.
  }

  return (
    <div>
      <div className="mt-5 h-1/5 mr-56 flex ">
        <button
          className="bg-green-400 w-12 hover:bg-gray-500 rounded item-center p-2 m-2 mt-2 px-3 py-2 text-white focus:outline-none ml-14 fontPoppins "
          onClick={handleCancel}
        >
          <AiOutlineCloseSquare size={22} color="white" />
        </button>
        <div className="w-full">
          <label
            htmlFor="packages"
            className="block mb-2 text-sm font-bold text-gray-600"
          >
            Paquete:
          </label>
          <select
            name="idPackage"
            id="idPackage"
            value={activities[0].idPackage}
            onChange={handlePackageChange}
            className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 fontPoppins text-sm"
          >
            {packages &&
    packages
      .slice() // Crea una copia del array para no modificar el original
      .sort((a, b) => b.id - a.id) // Ordena de mayor a menor por ID
      .map((pkg) => (
        <option key={pkg.id} value={pkg.id}>
          {pkg.title}
        </option>
      ))}
          </select>
          </div>
      </div>
      {activities.map((activity, index) => (
        <div key={index} className="mb-5">
          <h3 className="text-gray-700 text-lg font-bold">
            Actividad {index + 1}
          </h3>
          <label
            className="block mb-2 text-sm font-bold text-gray-600"
            htmlFor={`name${index}`}
          >
            Nombre:
          </label>
          <input
            type="text"
            name="name"
            value={activity.name}
            onChange={(e) => handleNameChange(index, e)}
            className="w-3/4 h-3/4 px-3 py-2  placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 fontPoppins text-sm"
          />

          <label
            className="block mb-2 text-sm font-bold text-gray-600"
            htmlFor={`image${index}`}
          >
            Imagen:
          </label>
          <input
            type="file"
            accept="image/*"
            name="image"
            onChange={(e) => handleImageChange(index, e)}
            className="w-3/4 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 fontPoppins text-sm  text-gray-600"
          />
          <div className="ml-32 justify-center mr-56">
            {activity.image && (
              <img
                src={activity.image}
                alt="Uploaded"
                style={{ maxWidth: "200px" }}
              />
            )}
          </div>

          <label
            className="block mb-2 text-sm font-bold text-gray-600"
            htmlFor={`name${index}`}
          >
            Precio USD:
          </label>
          <input
            type="number"
            name="price"
            min="0"
            value={activity.price}
            onChange={(e) => handlePriceChange(index, e)}
            className="w-3/4 px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 fontPoppins text-sm"
          />

          <label
            className="block mb-2 text-sm font-bold text-gray-600"
            htmlFor={`duration${index}`}
          >
            Duración:
          </label>
          <input
            type="text"
            name="duration"
            value={activity.duration}
            onChange={(e) => handleDurationChange(index, e)}
            className="w-3/4 px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 fontPoppins text-sm"
          />
          <div className="justify-center ml-20 mt-5 mb-5">
            <label className="flex flex-row justify-between-2text-sm font-bold text-gray-600">
              Incluida en el paquete:
              <input
                type="checkbox"
                name="included"
                checked={activity.included}
                onChange={(e) => handleIncludedChange(index, e)}
                className="w-50 h-5 ml-5 px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 fontPoppins text-sm"
              />
            </label>
          </div>

          <button
            className="bg-green-400 rounded p-2 m-2 mt-3 px-3 py-2 text-white focus:outline-none"
            onClick={() => handleRemoveActivity(index)}
          >
            <AiOutlineDelete size={22} color="white" />
          </button>
          <hr />
        </div>
      ))}

      <div className="flex flex-row">
      <button
        type="button"
        className="bg-green-400 hover:bg-gray-500 rounded flex flex-row justify-between item-center p-2 m-2 mt-3 px-3 py-2 text-white focus:outline-none ml-14 fontPoppins "
        onClick={handleAddActivity}
      >
        <AiOutlinePlusSquare size={22} color="white" /> Agregar
      </button>
      
      <button
        type="button"
        className="bg-green-400 hover:bg-gray-500 rounded flex flex-row justify-between item-center p-2 m-2 mt-3 px-3 py-2 text-white focus:outline-none ml-14 fontPoppins "
        onClick={handleSaveActivities}
        disabled={isSaved}
      >
        <AiOutlineSave size={22} color="white" /> {isSaved ? "Guardado" : "Guardar"}
      </button>
      </div>
    </div>
  );
}
