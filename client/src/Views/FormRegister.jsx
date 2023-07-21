import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../Redux/Users/usersActions";
import { FcGoogle } from "react-icons/fc";
import { GrFacebook } from "react-icons/gr";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import logo from "../Utils/Img/logo.png";
import sideImage from "../Utils/Img/side.png";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    profile: 1,
    name: "",
    lastName: "",
    email: "",
    password: "",
  });
  const { name, lastName, email, password } = user;

  const handleSubmit = async (e) => {
    // make the function async
    e.preventDefault();
    try {
      await dispatch(addUser(user)); // wait for the addUser action to complete
      setUserCreated(true); // set userCreated to true if addUser succeeded
    } catch (error) {
      setErrorMsg(error.message);
      console.log(error);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Columna Izquierda */}
      <div className="flex flex-col w-1/2">
        {/* Logo */}
        <div className="p-6">
          <img className="h-12" src={logo} alt="Logo" />
        </div>

        {/* Formulario */}
        <div className="mx-auto my-auto p-10 w-full md:w-2/3">
          {/* Titulos */}
          <div className="flex justify-between mb-5">
            <h2 className="text-gray-700 text-lg font-bold ">Registrarse</h2>
            <Link to="/login">
              <h2 className="text-blue-600 text-base font-normal tracking-wide hover:underline cursor-pointer">
                Ingresar
              </h2>
            </Link>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
            {/* Inputs */}
            <input
              value={name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              placeholder="Nombre"
              className="px-4 py-3 border rounded border-gray-300  text-gray-500 text-sm font-normal h-12"
            />

            <input
              value={lastName}
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              placeholder="Apellido"
              className="px-4 py-3 border rounded border-gray-300  text-gray-500 text-sm font-normal h-12"
            />

            <input
              value={email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Correo electrónico"
              className="px-4 py-3 border rounded border-gray-300  text-gray-500 text-sm font-normal h-12"
            />

            <div className="relative">
              <input
                value={password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                type={showPassword ? "text" : "password"}
                placeholder="Contraseña"
                className="px-4 py-3 border rounded w-full text-gray-500 text-sm font-normal h-12"
              />

              {showPassword ? (
                <AiFillEyeInvisible
                  className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <AiFillEye
                  className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
            {errorMsg && <p className="text-red-500">{errorMsg}</p>}
            {/* Botón Registrar */}
            <button className="bg-gray-400 text-white py-2 rounded-md text-center h-12">
              Registrarse
            </button>

            {/* Separador */}
            <div className="relative my-5">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-2 bg-white text-gray-300 text-sm font-normal tracking-wide p-4">
                  o regístrate con
                </span>
              </div>
            </div>
            {/* Botones Redes Sociales */}
            <div className="flex flex-col space-y-5">
              <button className="flex items-center justify-center px-4 py-2 rounded-md border border-gray-300 w-full h-12">
                <FcGoogle className="h-5 w-5 mr-2" />
                <span className="text-gray-700 font-bold text-sm">Google</span>
              </button>

              <button className="flex items-center justify-center px-4 py-2 rounded-md border border-gray-300 w-full h-12">
                <GrFacebook className="h-5 w-5 mr-2" color="#1877F2" />
                <span className="text-gray-700 font-bold text-sm">
                  Facebook
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Columna Derecha */}
      <div className="hidden w-1/2 lg:block p-8 overflow-hidden">
        <img
          className="object-contain rounded h-full w-full"
          src={sideImage}
          alt="Side"
        />
      </div>
    </div>
  );
};

export default RegisterPage;
