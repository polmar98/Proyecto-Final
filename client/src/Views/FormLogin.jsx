import React, { useState } from "react";

import logo from "../Utils/Img/logo.png";
import sideImage from "../Utils/Img/side.png";

const LoginPage = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="flex h-screen p-10">
      <div className="w-1/2 flex flex-col items-center justify-center p-40">
        <img className="mb-40 h-12 w-auto self-start " src={logo} alt="Logo" />
        <div className="flex justify-between w-full ">
          <h2 className="text-lg font-semibold text-gray-700">Ingresar</h2>
          <h2 className="text-lg font-semibold text-gray-700">Registrarse</h2>
        </div>
        <form className="flex flex-col space-y-5 mt-4 w-full">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo"
            className="border p-2 rounded-md"
          />
          <input placeholder="Contraseña" className="border p-2 rounded-md" />

          <button
            type="submit"
            className="bg-blue-500 mt-6 text-white py-2 rounded-md text-center"
          >
            Ingresar
          </button>
          <h1 className="mt-15 text-blue-500 text-center hover:underline cursor-pointer">
            ¿Olvidaste tu contraseña? Click aquí
          </h1>
          <div className="relative mt-1">
            <div
              className="absolute inset-0 flex items-center"
              aria-hidden="true"
            >
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-100 text-gray-500">
                O inicia sesión con
              </span>
            </div>
          </div>
          <div className="flex justify-center space-x-3 mt-6">
            <button>
              <img className="w-6 h-6" src="" alt="Google icon" />
            </button>
            <button>
              <img className="w-6 h-6" src="" alt="Facebook icon" />
            </button>
          </div>
        </form>
      </div>
      <div className="w-1/2 p-2">
        <img
          className="h-full w-full object-contain rounded-lg"
          src={sideImage}
          alt="Side view"
        />
      </div>
    </div>
  );
};

export default LoginPage;
