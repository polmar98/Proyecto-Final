import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPackageById } from "../Redux/Packages/packagesActions";
import NavBar from "../Components/NavBar";

function MyItinerary() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPackageById(id));
  }, []);

  const paquete = useSelector((state) => state.packages.packageDetails);

  const diasTour = paquete && paquete.duration;

  const cantidadDeDias = [];

  for (let i = 1; i <= diasTour; i++) {
    cantidadDeDias.push(
      <div
        className="w-[700px] h-[150px] rounded m-5 bg-gray-300 justify-start items-start"
        key={i}
      >
        <span className="ml-5 flex ">Dia {i}</span>
        <div className="flex ml-5">Esto vas a hacer este dia</div>
        <span className="flex ml-5">Agrega una nota</span>
        <textarea
          className="border-none w-[600px] flex ml-5"
          name=""
          id=""
          cols="1"
          rows="1"
        ></textarea>
        <button className="bg-green-500 m-1 p-2 rounded">Guardar Nota</button>
      </div>
    );
  }
  console.log("PAQUETE:", paquete);
  return (
    <>
      <div className="bg-verdeFooter ">
        <NavBar />
      </div>
      <div id="contenedor de todo">
        <div id="contenedor de itinerario">
          <div className=" flex justify-center items-center">
            <div className="w-[700px] h-[150px] rounded m-5 bg-gray-300 flex flex-col justify-around items-start">
              <span className="ml-5">Detalles del vuelo:</span>
              <span className="ml-5">Vuelo de ida:</span>

              <div className="flex ml-5 bg-gray-200 p-1 rounded m-1 w-[400px]">
                {paquete.outboundFlight}
              </div>
              <span className="ml-5">Vuelo de regreso</span>

              <div className="flex ml-5 bg-gray-200 p-1 rounded m-1 w-[400px]">
                {paquete.returnFlight}
              </div>
            </div>
          </div>

          <div className=" flex justify-center items-center">
            <div className="w-[700px] h-[150px] rounded m-5 bg-gray-300 flex flex-col justify-around items-start">
              <span className="ml-5">Detalles del Hospedaje:</span>
              <span className="ml-5">Hotel:</span>

              <div className="flex ml-5 bg-gray-200 p-1 rounded m-1 w-[400px]">
                {/* {paquete.Hotel} */}
              </div>
              <span className="ml-5">***</span>

              <div className="flex ml-5 bg-gray-200 p-1 rounded m-1 w-[400px]">
                {/* {paquete.Hotel} */}
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-1">{cantidadDeDias}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyItinerary;
