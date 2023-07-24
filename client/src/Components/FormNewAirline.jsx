import { fetchAirlines } from "../Redux/Airlines/airlinesActions";
import React, { useState} from "react";
import { useDispatch} from "react-redux";
import {AiOutlineCheckSquare} from 'react-icons/ai'
import { addAirline } from "../Redux/Airlines/airlinesActions";
import { AiOutlineMinusSquare} from 'react-icons/ai'



export default function FormNewAirline({onHideForm}){
    
    const dispatch = useDispatch();
    

    const [newAirlineName, setNewAirlineName] = useState({
        name:"",
      }); // Estado para el nombre de la nueva aerolinea


       
  function handleNewAirlineChange (e){
    setNewAirlineName({
      ...newAirlineName,
      [e.target.name]:e.target.value
    })}

function handleSubmit (e){
    e.preventDefault();
    dispatch(addAirline(newAirlineName));
    setNewAirlineName({
        name: "",
      });
      alert("Aerolinea creada correctamente");
      dispatch(fetchAirlines ())
      onHideForm()
}


function handleCancel() {
    onHideForm(); // Llama a la función para ocultar el formulario sin enviar datos.
  }


return(
<div>
    {/* Formulario de nueva ciudad */}
        <div>
          <form>
          <button className="bg-green-400 rounded p-2 m-2 mt-3 px-3 py-2 text-white focus:outline-none" onClick={handleCancel}>
                    <AiOutlineMinusSquare size={32} color= "white"/>
                </button>
            <label>Nombre de la aerolinea: </label>
            <input
            type="text"
            name="name"
            placeholder="Nombre de la ciudad"
            value={newAirlineName.name}
            onChange={handleNewAirlineChange}
            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>

        
            <button className="bg-green-400 rounded p-2 m-2 mt-3 px-3 py-2 text-white focus:outline-none"onClick={handleSubmit}>
                <AiOutlineCheckSquare size={32} color= "white"/>
            </button>

            
          </form>
          </div>
       

</div>
)
}