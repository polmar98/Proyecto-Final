import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Form = () => {
  const [data, setData] = useState({
    Pais: "",
    Continente: "",
    Ciudad: "",
    Titulo: "",
    FechaInicio: "",
    FechaFinal: "",
    Aerolinea: "",
    Hotel: "",
    Precio: "",
    Cupos: "",
    Imagenes: "",
  });

  const packagesList = useSelector((state) => state.packages.packagesList);

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
  };

  const fieldsToMap = ["Pais", "Continente", "Ciudad", "Aerolinea", "Hotel"];

  const filteredPackagesByContinent = packagesList.filter(
    (packageItem) => packageItem.Continente === data.Continente
  );

  const filteredPackagesByCountry = filteredPackagesByContinent.filter(
    (packageItem) => packageItem.Pais === data.Pais
  );

  const filteredPackagesByCity = filteredPackagesByCountry.filter(
    (packageItem) => packageItem.Ciudad === data.Ciudad
  );

  return (
    <div className="flex h-screen">
      <div className="flex flex-col w-1/2">
        <div className="mx-auto my-auto p-10 w-full md:w-2/3">
          <div className="flex justify-between mb-5">
            <h2 className="text-gray-700 text-lg font-bold">Formulario</h2>
          </div>

          <form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
            {Object.entries(data).map(([field, value]) => {
              if (field === "Aerolinea") return null; // Salta el campo de Aerolinea en este bloque

              let currentPackagesList;

              if (field === "Pais") {
                currentPackagesList = filteredPackagesByContinent;
              } else if (field === "Ciudad") {
                currentPackagesList = filteredPackagesByCountry;
              } else if (field === "Hotel") {
                currentPackagesList = filteredPackagesByCity;
              } else {
                currentPackagesList = packagesList;
              }

              return fieldsToMap.includes(field) ? (
                <select
                  key={field}
                  className="px-4 py-3 border rounded border-gray-300 text-gray-500 text-sm font-normal h-12"
                  name={field}
                  value={value}
                  onChange={handleInputChange}
                >
                  <option value="">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </option>
                  {currentPackagesList
                    .map((packageItem) => {
                      let fieldValue =
                        field === "Hotel"
                          ? packageItem.Alojamiento[0].Hotel
                          : packageItem[field];
                      return fieldValue;
                    })
                    .reduce((unique, item) => {
                      return unique.includes(item) ? unique : [...unique, item];
                    }, [])
                    .map((fieldValue, index) => (
                      <option key={index} value={fieldValue}>
                        {fieldValue}
                      </option>
                    ))}
                </select>
              ) : (
                <input
                  key={field}
                  className="px-4 py-3 border rounded border-gray-300 text-gray-500 text-sm font-normal h-12"
                  type={field.includes("Fecha") ? "date" : "text"}
                  name={field}
                  value={value}
                  onChange={handleInputChange}
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                />
              );
            })}

            {/* Mueve el bloque de Aerolinea fuera del bucle */}
            <select
              className="px-4 py-3 border rounded border-gray-300 text-gray-500 text-sm font-normal h-12"
              name="Aerolinea"
              value={data.Aerolinea}
              onChange={handleInputChange}
            >
              <option value="">Aerolinea</option>
              {filteredPackagesByContinent
                .map((packageItem) => packageItem.Aerolinea)
                .reduce((unique, item) => {
                  return unique.includes(item) ? unique : [...unique, item];
                }, [])
                .map((airline, index) => (
                  <option key={index} value={airline}>
                    {airline}
                  </option>
                ))}
            </select>

            <button
              className="bg-gray-400 text-white py-2 rounded-md text-center h-12"
              style={{
                backgroundColor: Object.values(data).every((value) => value)
                  ? "#43B97F"
                  : "#gray-400",
              }}
              type="submit"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>

      <div className="hidden w-1/2 lg:block p-8 overflow-hidden">
        {/* Aquí puedes agregar cualquier imagen que desees */}
      </div>
    </div>
  );
};

export default Form;
