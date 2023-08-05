import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import axios from 'axios'

export default function FormActivity() {
  const [activities, setActivities] = useState([
    {
      name: "",
      image: "",
      price: 0,
      included: false,
      duration: "",
    },
  ]);

  const handleNameChange = (index, e) => {
    const newActivities = [...activities];
    newActivities[index].name = e.target.value;
    setActivities(newActivities);
  };

 
  const handleImageChange = (index, e) => {
    const file = e.target.files[0];

    const cloudName = 'dro5aw3iy';
    const uploadPreset = 'images';

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);
  
    const uploadImage = async () => {
      try {
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
      
        if (response.status === 200) {
          const newActivities = [...activities];
          newActivities[index].image = response.data.secure_url;
          setActivities(newActivities);
        } else {
          console.error('Error al cargar la imagen en Cloudinary');
        }
      } catch (error) {
        console.error('Error al cargar la imagen:', error);
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
    setActivities([
      ...activities,
      {
        name: "",
        image: "",
        price: 0,
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
              onChange={(e) => handleNameChange(index, e)}
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
  
            <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor={`image${index}`}>Imagen:</label>
            <input
              type="file" 
              accept="image/*" 
              name= "image"
              onChange={(e) => handleImageChange(index, e)}
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          

          {activity.image && (
  <img src={activity.image} alt="Uploaded" style={{ maxWidth: '100%' }} />
)}


<label className="block mb-2 text-sm font-medium text-gray-600" htmlFor={`name${index}`}>Precio USD:</label>
            <input
              type="number"
              name="price"
              min = "0"
              value={activity.price}
              onChange={(e) => handlePriceChange(index, e)}
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
  
            <label>
              <input
                type="checkbox"
                name="included"
                checked={activity.included}
                onChange={(e) => handleIncludedChange(index,e)}
                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              Incluida en el paquete
            </label>
  
            <label className="block mb-2 text-sm font-medium text-gray-600" htmlFor={`duration${index}`}>Duración:</label>
            <input
              type="text"
              name="duration"
              value={activity.duration}
              onChange={(e) => handleDurationChange(index, e)}
              className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
  
            <button className="bg-green-400 rounded p-2 m-2 mt-3 px-3 py-2 text-white focus:outline-none" onClick={() => handleRemoveActivity(index)}>
              <AiOutlineDelete size={32} color= "white"/>
            </button>
            <hr />
          </div>
        ))}
        <button type="button" className="bg-green-400 rounded p-2 m-2 mt-3 px-3 py-2 text-white focus:outline-none" onClick={handleAddActivity}>
          <AiOutlinePlusSquare size={32} color= "white"/>
        </button>
      </div>
    );
    

}
