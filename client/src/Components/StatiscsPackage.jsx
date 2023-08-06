
import React, { useState, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";

export default function StatisticsPackage() {
  const [selectedOption, setSelectedOption] = useState("total");

  const packages = useSelector((state) => state.packages.packagesList);

  

  // Función para calcular las estadísticas requeridas según el botón seleccionado
  const calculateStatistics = () => {
    if (selectedOption === "total") {
      let totalPackages = 0;
      let totalAmount = 0;
      packages.forEach((tour) => {
        totalPackages += tour.quantity;
        totalAmount += tour.amount;
      });
      return { totalPackages, totalAmount };
    } else if (selectedOption === "byPackage") {
      // Código para calcular las estadísticas por paquete
      // Puedes utilizar funciones como reduce, map, filter para realizar los cálculos
      // y obtener el nombre del paquete, la cantidad y el monto correspondiente
      // Ejemplo:
      const packageStats = packages.map((tour) => ({
        name: tour.name,
        quantity: tour.quantity,
        amount: tour.amount,
      }));
      return packageStats;
    } else if (selectedOption === "byContinent") {
      // Código para calcular las estadísticas por continente
      // Similar al caso de "byPackage", deberás obtener el continente,
      // la cantidad y el monto correspondiente para cada paquete y agruparlos por continente
      // Ejemplo:
      const continentStats = packages.reduce((acc, tour) => {
        const continent = tour.continent;
        if (!acc[continent]) {
          acc[continent] = { quantity: 0, amount: 0 };
        }
        acc[continent].quantity += tour.quantity;
        acc[continent].amount += tour.amount;
        return acc;
      }, {});
      return Object.entries(continentStats).map(([continent, stats]) => ({
        continent,
        quantity: stats.quantity,
        amount: stats.amount,
      }));
    }
  };

  const statisticsData = calculateStatistics();

  return (
    <div>
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setSelectedOption("total")}
          className={`mr-4 ${
            selectedOption === "total" ? "bg-blue-500" : "bg-gray-300"
          } p-2 rounded text-white font-bold`}
        >
          Venta Total
        </button>
        <button
          onClick={() => setSelectedOption("byPackage")}
          className={`mr-4 ${
            selectedOption === "byPackage" ? "bg-blue-500" : "bg-gray-300"
          } p-2 rounded text-white font-bold`}
        >
          Venta por Paquete
        </button>
        <button
          onClick={() => setSelectedOption("byContinent")}
          className={`${
            selectedOption === "byContinent" ? "bg-blue-500" : "bg-gray-300"
          } p-2 rounded text-white font-bold`}
        >
          Venta por Continente
        </button>
      </div>

      {selectedOption === "total" && (
        <div className="mt-4">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left font-bold">Cantidad Total de Paquetes</th>
                <th className="text-left font-bold">Monto Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{statisticsData.totalPackages}</td>
                <td>{statisticsData.totalAmount}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {selectedOption === "byPackage" && (
        <div className="mt-4">
          {/* Tabla de Venta por Paquete */}
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left font-bold">Nombre del Paquete</th>
                <th className="text-left font-bold">Cantidad</th>
                <th className="text-left font-bold">Monto</th>
              </tr>
            </thead>
            <tbody>
              {statisticsData.map((tour) => (
                <tr key={tour.name}>
                  <td>{tour.name}</td>
                  <td>{tour.quantity}</td>
                  <td>{tour.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedOption === "byContinent" && (
        <div className="mt-4">
          {/* Tabla de Venta por Continente */}
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left font-bold">Continente</th>
                <th className="text-left font-bold">Cantidad</th>
                <th className="text-left font-bold">Monto</th>
              </tr>
            </thead>
            <tbody>
              {statisticsData.map((continent) => (
                <tr key={continent.continent}>
                  <td>{continent.continent}</td>
                  <td>{continent.quantity}</td>
                  <td>{continent.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
