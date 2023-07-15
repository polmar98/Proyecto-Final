import React, { useState } from "react";

const ViajeForm = () => {
  const [titulo, setTitulo] = useState("");
  const [pais, setPais] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFinal, setFechaFinal] = useState("");
  const [duracion, setDuracion] = useState("");
  const [aerolinea, setAerolinea] = useState("");
  const [detallesIda, setDetallesIda] = useState("");
  const [detallesRegreso, setDetallesRegreso] = useState("");
  const [alojamientoHotel, setAlojamientoHotel] = useState("");
  const [alojamientoEstrellas, setAlojamientoEstrellas] = useState("");
  const [alojamientoCalificacion, setAlojamientoCalificacion] = useState("");
  const [alojamientoRegimen, setAlojamientoRegimen] = useState("");
  const [alojamientoTipo, setAlojamientoTipo] = useState("");
  const [alojamientoCalifHab, setAlojamientoCalifHab] = useState("");
  const [precio, setPrecio] = useState("");
  const [promo, setPromo] = useState("");
  const [moneda, setMoneda] = useState("");
  const [serviciosDetalle, setServiciosDetalle] = useState("");
  const [serviciosPrecio, setServiciosPrecio] = useState("");
  const [serviciosIncluido, setServiciosIncluido] = useState("");
  const [cupos, setCupos] = useState("");
  const [calificacion, setCalificacion] = useState("");
  const [comentariosUsuario, setComentariosUsuario] = useState("");
  const [comentariosTestimonio, setComentariosTestimonio] = useState("");
  const [comentariosFecha, setComentariosFecha] = useState("");
  const [itinerarioDia, setItinerarioDia] = useState("");
  const [itinerarioDescripcion, setItinerarioDescripcion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      titulo,
      pais,
      ciudad,
      fechaInicio,
      fechaFinal,
      duracion,
      aerolinea,
      detallesIda,
      detallesRegreso,
      alojamiento: {
        hotel: alojamientoHotel,
        estrellas: alojamientoEstrellas,
        calificacion: alojamientoCalificacion,
        regimenComidas: alojamientoRegimen,
        habitaciones: {
          tipo: alojamientoTipo,
          calificacion: alojamientoCalifHab,
        },
      },
      precio,
      promocion: promo,
      moneda,
      servicios: {
        detalle: serviciosDetalle,
        precio: serviciosPrecio,
        incluido: serviciosIncluido,
      },
      cupos,
      calificacion,
      comentarios: [
        {
          usuario: comentariosUsuario,
          testimonio: comentariosTestimonio,
          fecha: comentariosFecha,
        },
      ],
      itinerario: [
        {
          dia: itinerarioDia,
          descripcion: itinerarioDescripcion,
        },
      ],
    };

    // hacer post para guardar data
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <input
        type="text"
        placeholder="País"
        value={pais}
        onChange={(e) => setPais(e.target.value)}
      />
      <input
        type="text"
        placeholder="Ciudad"
        value={ciudad}
        onChange={(e) => setCiudad(e.target.value)}
      />
      <input
        type="date"
        placeholder="Fecha Inicio"
        value={fechaInicio}
        onChange={(e) => setFechaInicio(e.target.value)}
      />
      <input
        type="date"
        placeholder="Fecha Final"
        value={fechaFinal}
        onChange={(e) => setFechaFinal(e.target.value)}
      />
      <input
        type="text"
        placeholder="Duración"
        value={duracion}
        onChange={(e) => setDuracion(e.target.value)}
      />
      <input
        type="text"
        placeholder="Aerolínea"
        value={aerolinea}
        onChange={(e) => setAerolinea(e.target.value)}
      />
      <input
        type="text"
        placeholder="Detalles Ida"
        value={detallesIda}
        onChange={(e) => setDetallesIda(e.target.value)}
      />
      <input
        type="text"
        placeholder="Detalles Regreso"
        value={detallesRegreso}
        onChange={(e) => setDetallesRegreso(e.target.value)}
      />
      <input
        type="text"
        placeholder="Hotel"
        value={alojamientoHotel}
        onChange={(e) => setAlojamientoHotel(e.target.value)}
      />
      <input
        type="text"
        placeholder="Estrellas"
        value={alojamientoEstrellas}
        onChange={(e) => setAlojamientoEstrellas(e.target.value)}
      />
      <input
        type="text"
        placeholder="Calificación"
        value={alojamientoCalificacion}
        onChange={(e) => setAlojamientoCalificacion(e.target.value)}
      />
      <input
        type="text"
        placeholder="Régimen Comidas"
        value={alojamientoRegimen}
        onChange={(e) => setAlojamientoRegimen(e.target.value)}
      />
      <input
        type="text"
        placeholder="Tipo Habitación"
        value={alojamientoTipo}
        onChange={(e) => setAlojamientoTipo(e.target.value)}
      />
      <input
        type="text"
        placeholder="Calificación Habitación"
        value={alojamientoCalifHab}
        onChange={(e) => setAlojamientoCalifHab(e.target.value)}
      />
      <input
        type="number"
        placeholder="Precio"
        value={precio}
        onChange={(e) => setPrecio(e.target.value)}
      />
      <input
        type="number"
        placeholder="Promoción"
        value={promo}
        onChange={(e) => setPromo(e.target.value)}
      />
      <input
        type="text"
        placeholder="Moneda"
        value={moneda}
        onChange={(e) => setMoneda(e.target.value)}
      />
      <input
        type="text"
        placeholder="Detalle Servicio"
        value={serviciosDetalle}
        onChange={(e) => setServiciosDetalle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Precio Servicio"
        value={serviciosPrecio}
        onChange={(e) => setServiciosPrecio(e.target.value)}
      />
      <input
        type="checkbox"
        checked={serviciosIncluido}
        onChange={(e) => setServiciosIncluido(e.target.checked)}
      />{" "}
      Incluido
      <input
        type="number"
        placeholder="Cupos"
        value={cupos}
        onChange={(e) => setCupos(e.target.value)}
      />
      <input
        type="text"
        placeholder="Calificación"
        value={calificacion}
        onChange={(e) => setCalificacion(e.target.value)}
      />
      <input
        type="text"
        placeholder="Usuario"
        value={comentariosUsuario}
        onChange={(e) => setComentariosUsuario(e.target.value)}
      />
      <textarea
        placeholder="Testimonio"
        value={comentariosTestimonio}
        onChange={(e) => setComentariosTestimonio(e.target.value)}
      ></textarea>
      <input
        type="date"
        placeholder="Fecha"
        value={comentariosFecha}
        onChange={(e) => setComentariosFecha(e.target.value)}
      />
      <input
        type="text"
        placeholder="Día"
        value={itinerarioDia}
        onChange={(e) => setItinerarioDia(e.target.value)}
      />
      <textarea
        placeholder="Descripción"
        value={itinerarioDescripcion}
        onChange={(e) => setItinerarioDescripcion(e.target.value)}
      ></textarea>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ViajeForm;
