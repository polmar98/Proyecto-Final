import { fetchCountries } from "../Redux/Country/countriesActions";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {AiOutlineCheckSquare} from 'react-icons/ai'
import { addCities, fetchCities } from "../Redux/Cities/citiesActions";
import { AiOutlinePlusSquare,AiOutlineMinusSquare} from 'react-icons/ai'
import FormNewCountry from "./FormNewCountry";


export default function FormNewCityDestiny({onHideForm}){
    
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries.countriesList);

    const [newCityDestinyName, setNewCityDestinyName] = useState({
        name:"",
        idCountry:""
      }); // Estado para el nombre de la nueva ciudad


    useEffect(() => {
      dispatch(fetchCountries())
      }, [dispatch]);

    
  function handleNewCityInputChange (e){
    setNewCityDestinyName({
      ...newCityDestinyName,
      [e.target.name]:e.target.value
    })}

function handleSubmit (e){
    e.preventDefault();
    dispatch(addCities(newCityDestinyName));
    setNewCityDestinyName({
        name: "",
        idCountry: "",
      });
      alert("Ciudad creada correctamente");
      dispatch(fetchCities())
      onHideForm()
}

// Estado para controlar la visibilidad del formulario de nueva ciudad de origen
const [showNewCountryForm, setShowNewCountryForm] = useState(false);

// Función para mostrar el formulario de nueva ciudad de origen
const handleShowNewCountryForm = (e) => {
  e.preventDefault()
  setShowNewCountryForm(true);
};

const handleHideNewCountryForm = () => {
    setShowNewCountryForm(false);
};

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
            <label>Nombre de la ciudad: </label>
            <input
            type="text"
            name="name"
            placeholder="Nombre de la ciudad"
            value={newCityDestinyName.name}
            onChange={handleNewCityInputChange}
            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>

            <select name="idCountry" 
            id="countryOrigin"
            value={newCityDestinyName.idCountry}
            onChange={handleNewCityInputChange}
            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
              <option value="">Seleccione un País </option>
            {countries.map((country)=>
            <option key={country.id} value={country.id}>{country.name}
            </option>)}
            </select>

            <button className="bg-green-400 rounded p-2 m-2 mt-3 px-3 py-2 text-white focus:outline-none" onClick={handleShowNewCountryForm}  >
          <AiOutlinePlusSquare  size={32} color= "white"  /> Nuevo País
        </button>
        {showNewCountryForm && <FormNewCountry onHideForm={handleHideNewCountryForm}/>}


            <button className="bg-green-400 rounded p-2 m-2 mt-3 px-3 py-2 text-white focus:outline-none"onClick={handleSubmit}>
                <AiOutlineCheckSquare size={32} color= "white"/>
            </button>

            
          </form>
          </div>
       

</div>
)
}