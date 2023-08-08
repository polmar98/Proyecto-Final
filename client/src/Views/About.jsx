import React from "react";
import NavBar from "../Components/NavBar";

function About() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-verdeFooter shadow-md text-white">
        <NavBar />
      </div>
      <div className="text-center p-10 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">
          Bienvenidos a Wanderlust
        </h2>
        <p className="mt-6 px-8 text-gray-700 text-xl leading-relaxed">
          Donde encontrarás experiencias de viaje inolvidables y descubrirás los
          destinos más fascinantes del mundo. Nuestro proyecto nace de la
          colaboración de un grupo de entusiastas viajeros que se conocieron
          durante un bootcamp de desarrollo web. Compartimos la visión de crear
          una plataforma que no solo ofrezca servicios de viaje, sino que
          también inspire a las personas a explorar nuevos horizontes y
          sumergirse en diferentes culturas. Creemos en la importancia de los
          detalles y la personalización. Por eso, nos esforzamos en diseñar
          paquetes turísticos que se adapten a tus preferencias y necesidades
          individuales. Ya sea que estés buscando unas vacaciones relajantes en
          una playa paradisíaca, un emocionante viaje de aventura o una escapada
          cultural, estamos aquí para convertir tus sueños en realidad. Te
          invitamos a explorar nuestro sitio web y descubrir las maravillas que
          te esperan. Estamos emocionados de ser parte de tu próxima aventura y
          ayudarte a crear momentos que perdurarán toda la vida. ¡Viaja con
          nosotros y deja que tu espíritu aventurero se desate!
        </p>
        <h3 className="text-3xl font-semibold mt-12 text-gray-800">
          Desarrolladores
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <Card name="Lucas David Aonzo" role="Frontend" />
          <Card name="Moira Magali Brun" role="Frontend" />
          <Card name="German Efrain Montenegro Rolon" role="Frontend" />
          <Card name="Sara Carolina Marulanda Rojas" role="Frontend" />
          <Card name="Paul Fernando Martinez Navarro" role="Backend" />
          <Card name="Cristian David Molina" role="Backend" />
          <Card name="Eliana Soledad Santa Cruz Torres" role="Backend" />
          <Card name="Ivan Jose Trejo Contreras" role="Backend" />
        </div>
      </div>
    </div>
  );
}

function Card({ name, role }) {
  return (
    <div className="p-6 shadow-sm rounded-md bg-white transition duration-300 transform hover:shadow-md">
      <h4 className="font-semibold text-2xl mb-2 text-gray-800">{name}</h4>
      <p className="font-light text-lg text-gray-600">{role}</p>
    </div>
  );
}

export default About;
