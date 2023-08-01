import React, {useState} from "react";
import {AiOutlineDelete} from 'react-icons/ai'
import { AiOutlinePlusSquare } from 'react-icons/ai'


export default function FormActivity(){



  const [activities, setActivities] = useState([
    {
      name: "",
      image: "",
      price: 0,
      included: false,
      duration: "",
    },
  ]);

  const handleActivityChange = (index, event) => {
    const { name, value, type, checked } = event.target;
    const newActivities = [...activities];

    if (type === "checkbox") {
      newActivities[index][name] = checked;
    } else if (type === "file") {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        newActivities[index].image = reader.result;
        setActivities(newActivities);
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    } else if (type === "text" && name === "image") {
      newActivities[index].image = value;
      setActivities(newActivities);
    } else {
      newActivities[index][name] = value;
      setActivities(newActivities);
    }
  };

  const handleAddActivity = (e) => {
    e.preventDefault();
    setActivities([
      ...activities,
      {
        name: "",
        image: "",
        price: "",
        included: false,
        duration: "",
      },
    ]);
  };

  const handleRemoveActivity = (index) => {
    const newActivities = [...activities];
    newActivities.splice(index, 1);
    setActivities(newActivities);
  };

      return(
        <div>
        {activities.map((activity, index) => (
          <div key={index} className="mb-5">
            <h3 className="text-xl font-semibold mb-2">Actividad {index + 1}</h3>
            <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor={`name${index}`}>Nombre:</label>
            <input
              type="text"
              name="name"
              value={activity.name}
              onChange={(e) => handleActivityChange(index, e)}
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
  
            <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor={`image${index}`}>Imagen:</label>
            <input
              type="file" 
              accept="image/*" 
              name= "image"
              onChange={(e) => handleActivityChange(index, e)}
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          
            <label  className="block mb-2 text-sm font-medium text-gray-600" htmlFor={`imageUrl${index}`}>URL de la imagen:</label>
            <input
              type="text"
              name= "imageUrl"
              value={activity.image}
              onChange={(e) => handleActivityChange(index, e)}
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />

{activity.image ? (
            <img
              src={typeof activity.image === "string" ? activity.image : URL.createObjectURL(activity.image)}
              alt={`Actividad ${index + 1}`}
              style={{ width: "100px", height: "auto" }}
            />
          ) : null}
            <label className="block mb-2 text-sm font-medium text-gray-600"  htmlFor={`price${index}`}>Precio:</label>
            <input
              type="number"
              name="price"
              value={activity.price}
              onChange={(e) => handleActivityChange(index, e)}
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
  
            <label>
              <input
                type="checkbox"
                name="included"
                checked={activity.included}
                onChange={(e) => handleActivityChange(index, e)}
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              Incluida en el paquete
            </label>
  
            <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor={`duration${index}`}>Duración:</label>
            <input
              type="text"
              name="duration"
              value={activity.duration}
              onChange={(e) => handleActivityChange(index, e)}
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
  
            <button className="bg-green-400 rounded p-2 m-2 mt-3 px-3 py-2 text-white focus:outline-none" onClick={() => handleRemoveActivity(index)}>
              <AiOutlineDelete size={32} color= "white"/>
            </button>
            <hr />
          </div>
        ))}
        <button className="bg-green-400 rounded p-2 m-2 mt-3 px-3 py-2 text-white focus:outline-none" onClick={handleAddActivity}>
          <AiOutlinePlusSquare size={32} color= "white"/>
        </button>
      </div>
    );
    

}
