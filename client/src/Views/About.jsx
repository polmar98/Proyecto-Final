import React from "react";
import NavBar from "../Components/NavBar";

function About() {
  return (
    <div className="text-center p-4 bg-verdeFooter h-screen w-screen	">
      <div className="bg-verdeFooter border-b border-white">
        <NavBar />
      </div>
      <h2 className="text-4xl font-bold mb-6 text-white">
        Bienvenidos a Wanderlust
      </h2>
      <p className="mt-10 px-44 text-white text-xl">
        Donde encontrarás experiencias de viaje inolvidables y descubrirás los
        destinos más fascinantes del mundo. Nuestro proyecto nace de la
        colaboración de un grupo de entusiastas viajeros que se conocieron
        durante un bootcamp de desarrollo web. Compartimos la visión de crear
        una plataforma que no solo ofrezca servicios de viaje, sino que también
        inspire a las personas a explorar nuevos horizontes y sumergirse en
        diferentes culturas. Creemos en la importancia de los detalles y la
        personalización. Por eso, nos esforzamos en diseñar paquetes turísticos
        que se adapten a tus preferencias y necesidades individuales. Ya sea que
        estés buscando unas vacaciones relajantes en una playa paradisíaca, un
        emocionante viaje de aventura o una escapada cultural, estamos aquí para
        convertir tus sueños en realidad. Te invitamos a explorar nuestro sitio
        web y descubrir las maravillas que te esperan. Estamos emocionados de
        ser parte de tu próxima aventura y ayudarte a crear momentos que
        perdurarán toda la vida. ¡Viaja con nosotros y deja que tu espíritu
        aventurero se desate!
      </p>
      <h3 className="text-2xl font-semibold mt-10 text-white">
        Desarrolladores
      </h3>
      <div className="grid grid-cols-4 gap-4 mt-10">
        <Card
          name="Lucas David Aonzo"
          role="Frontend"
          className="bg-blue-200 text-blue-800"
        />
        <Card
          name="Moira Magali Brun"
          role="Frontend"
          className="bg-yellow-200 text-yellow-800"
        />
        <Card
          name="German Efrain Montenegro Rolon"
          role="Frontend"
          className="bg-green-200 text-green-800"
        />
        <Card
          name="Sara Carolina Marulanda Rojas"
          role="Frontend"
          className="bg-purple-200 text-purple-800"
        />
        <Card
          name="Paul Fernando Martinez Navarro"
          role="Backend"
          className="bg-red-200 text-red-800"
        />
        <Card
          name="Cristian David Molina"
          role="Backend"
          className="bg-indigo-200 text-indigo-800"
        />
        <Card
          name="Eliana Soledad Santa Cruz Torres"
          role="Backend"
          className="bg-pink-200 text-pink-800"
        />
        <Card
          name="Ivan Jose Trejo Contreras"
          role="Backend"
          className="bg-gray-200 text-gray-800"
        />
      </div>
    </div>
  );
}

function Card({ name, role, className }) {
  return (
    <div className={`p-4 shadow-md rounded-square w-50 h-50 ${className}`}>
      <h4 className="font-semibold text-xl">{name}</h4>
      <p className="mt-2">{role}</p>
    </div>
  );
}

export default About;
