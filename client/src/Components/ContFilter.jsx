import { useSelector } from "react-redux";

function ContFilter() {
  const paquetes = useSelector((state) => state.packages.Alojamiento);
  console.log("paquetes:", paquetes);
  // const filter = data.slice(0, 6);

  return (
    <div>
      {paquetes.map((hotel) => (
        <div key={hotel.Titulo}>
          <h1>{hotel.Alojamiento[0].Hotel}</h1>
          <h2>{hotel.Alojamiento[0].Estrellas}</h2>
          <h2>{hotel.Alojamiento[0].Calificacion}</h2>
        </div>
      ))}
    </div>
  );
}

export default ContFilter;
