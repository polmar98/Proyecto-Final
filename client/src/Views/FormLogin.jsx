import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { FcGoogle } from "react-icons/fc";
import { GrGithub } from "react-icons/gr";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import logo from "../Utils/Img/logo.png";
import sideImage from "../Utils/Img/side.png";
import { fetchPackages } from "../Redux/Packages/packagesActions";
import { loginUser } from "../Redux/Users/usersActions";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/authContext";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [formFilled, setFormFilled] = useState(false);
  const user = useSelector((state) => state.users.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    login,
    error,
    currentUser,
    signInWithGoogle,
    signInWithFacebook,
    signInWithGithub,
    resetError,
  } = useAuth();

  useEffect(() => {
    if (error) {
      setErrorMsg(error);
      toast.error(error);
    } else if (currentUser) {
      toast.success(`Bienvenido ${currentUser.displayName}!`);
      navigate("/home"); // redirige a la ruta /home
    }
    return () => {
      setErrorMsg("");
      resetError();
    };
  }, [error, currentUser, navigate, resetError]);

  useEffect(() => {
    setFormFilled(email && password); // si email y password tienen valor, formFilled es true
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //login email and password in firebase
    if (!email || !password) {
      setErrorMsg("Ingrese email y contraseña");
      return;
    }
    try {
      await login(email, password);
      dispatch(loginUser(user));
    } catch (error) {
      setErrorMsg(error.message);
      console.log(error);
    }
  };

  const handleGoogle = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      setErrorMsg(error.message);
      console.log(error);
    }
  };

  const handleGithub = async () => {
    try {
      await signInWithGithub();
      console.log("github");
    } catch (error) {
      setErrorMsg(error.message);
      console.log(error);
    }
  };

  const handleFacebook = async () => {
    try {
      await signInWithFacebook();
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
            <h2 className="text-gray-700 text-lg font-bold ">Ingresar</h2>
            <Link to="/register">
              <h2 className="text-blue-600 text-base font-normal tracking-wide hover:underline cursor-pointer">
                Registrarse
              </h2>
            </Link>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
            {/* Inputs */}
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Número de móvil o correo electrónico"
              className="px-4 py-3 border rounded border-gray-300  text-gray-500 text-sm font-normal h-12"
            />

            <div className="relative">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
            {/* Botón Ingresar */}
            <button
              className="bg-gray-400 text-white py-2 rounded-md text-center h-12"
              style={{ backgroundColor: formFilled ? "#43B97F" : "#gray-400" }}
            >
              Ingresar
            </button>

            {/* Link Contraseña */}
            <h1 className="mt-5 text-blue-500 text-center hover:underline cursor-pointer">
              ¿Olvidaste tu contraseña?
            </h1>

            {/* Espaciado */}
            <div className="mt-10">
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
                    o inicia sesión con
                  </span>
                </div>
              </div>
              {/* Botones Redes Sociales */}

              <div className="flex flex-col space-y-5">
                <button
                  className="flex items-center justify-center px-4 py-2 rounded-md border border-gray-300 w-full h-12"
                  onClick={handleGoogle}
                >
                  <FcGoogle className="h-5 w-5 mr-2" />
                  <span className="text-gray-700 font-bold text-sm">
                    Google
                  </span>
                </button>

                <button
                  className="flex items-center justify-center px-4 py-2 rounded-md border border-gray-300 w-full h-12"
                  onClick={handleGithub}
                >
                  <GrGithub className="h-5 w-5 mr-2" />
                  <span className="text-gray-700 font-bold text-sm">
                    Github
                  </span>
                </button>
              </div>
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

export default LoginPage;
