import { useSelector } from "react-redux";
import { useState } from "react";

function ContFilter() {
  const paquetes = useSelector((state) => state.packages.packagesList);
  const [filtrados, SetFiltrados] = useState([]);

  function filtradoPorCont(continente) {
    const filtroPaq = paquetes.filter((paq) => paq.Continente === continente);
    SetFiltrados(filtroPaq.slice(0, 6));
  }

  return (
    <>
      <div className="grid grid-cols-1">
        <div className="flex justify-around">
          <button
            className="pl-7 pr-7 pt-2 pb-2 rounded bg-green-400 text-white"
            onClick={() => {
              filtradoPorCont("Africa");
            }}
          >
            Africa
          </button>

          <button
            className="pl-7 pr-7 pt-2 pb-2 rounded bg-green-400 text-white"
            onClick={() => {
              filtradoPorCont("America");
            }}
          >
            {" "}
            Americas
          </button>
          <button
            className="pl-7 pr-7 pt-2 pb-2 rounded bg-green-400 text-white"
            onClick={() => {
              filtradoPorCont("Asia");
            }}
          >
            {" "}
            Asia
          </button>

          <button
            className="pl-7 pr-7 pt-2 pb-2 rounded bg-green-400 text-white"
            onClick={() => {
              filtradoPorCont("Europa");
            }}
          >
            {" "}
            Europa
          </button>

          <button
            className="pl-7 pr-7 pt-2 pb-2 rounded bg-green-400 text-white"
            onClick={() => {
              filtradoPorCont("Oceania");
            }}
          >
            {" "}
            Oceanía
          </button>
        </div>

        <div className="mt-7 w-[1000px]">
          <div className="grid grid-cols-3">
            {filtrados.length > 0
              ? filtrados.map((paq) => (
                  <div key={paq.Id} className="m-2 rounded shadow-2xl p-2">
                    <img
                      className="rounded"
                      src={paq.Alojamiento[0].Imagenes[0].Url}
                      alt=""
                    />
                    <h1>{paq.Ciudad}</h1>
                    <h1>{paq.Titulo}</h1>

                    <h1>{paq.Duracion} days for trip</h1>
                  </div>
                ))
              : paquetes.slice(0, 6).map((paq1) => (
                  <div key={paq1.Id} className="m-2 rounded shadow-2xl p-2">
                    <img
                      className="rounded"
                      src={paq1.Alojamiento[0].Imagenes[0].Url}
                      alt=""
                    />
                    <h1>{paq1.Ciudad}</h1>
                    <h1>{paq1.Titulo}</h1>

                    <h1>{paq1.Duracion} days for trip</h1>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ContFilter;
