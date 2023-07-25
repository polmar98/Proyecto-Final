import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../Redux/Users/usersActions";
import { FcGoogle } from "react-icons/fc";
import { GrGithub } from "react-icons/gr";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import logo from "../Utils/Img/logo.png";
import sideImage from "../Utils/Img/side.png";
import { Link } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { useAuth } from "../Context/authContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import validateForm from "../Utils/Validateform";

const RegisterPage = () => {
  const {
    signInWithGoogle,
    signInWithGithub,
    signInWithFacebook,
    register,
    currentUser,
    login,
    error,
    resetError,
  } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const idUser = useSelector((state) => state.users.user);
  const idCart = useSelector((state) => state.carrito.idCart);

  const [user, setUser] = useState({
    profile: 1,
    name: "",
    lastName: "",
    email: "",
    password: "",
  });
  const { name, lastName, email, password } = user;

  useEffect(() => {
    if (error) {
      setErrorMsg(error);
      toast.error(error);
    }
    if (currentUser) {
      navigate("/home"); // redirige a la ruta /home
    }
    return () => {
      setErrorMsg("");
      resetError();
    };
  }, [error, currentUser, navigate, resetError]);

  useEffect(() => {
    if (formSubmitted) {
      const errors = validateForm(user);
      if (Object.keys(errors).length > 0) {
        setErrorMsg(errors);
      } else {
        setErrorMsg("");
      }
    }
  }, [user, formSubmitted]);

  const validateInput = () => {
    if (name !== "" && lastName !== "" && email !== "" && password !== "") {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    const errors = validateForm(user);
    if (Object.keys(errors).length > 0) {
      setErrorMsg(errors);
      console.log(errors);
    }
    //register email and password in firebase
    try {
      const res = await register(email, password);

      if (res) {
        await updateProfile(res.user, {
          displayName: `${name} ${lastName}`,
        });
        dispatch(addUser(user));
        setUserCreated(true);
        toast.success(`Bienvenido ${name}!`);
        login(email, password);
        navigate("/home");
      }
    } catch (error) {
      setErrorMsg(error.message);
      console.log(error);
    }
  };

  console.log(currentUser);

  const handleGithub = async () => {
    try {
      const result = await signInWithGithub();
      console.log(result);
      if (result) {
        const tokenResponse = result._tokenResponse;
        dispatch(
          addUser({
            name: tokenResponse.displayName,
            lastName: "",
            email: tokenResponse.email,
            password: tokenResponse.localId,
          })
        );
        setUserCreated(true);
        toast.success(`Bienvenido ${tokenResponse.fullName}!`);
        navigate("/home");
      }
    } catch (error) {
      setErrorMsg(error.message);
      console.log(error);
    }
  };

  const handleGoogle = async () => {
    try {
      const result = await signInWithGoogle();
      if (result) {
        const tokenResponse = result._tokenResponse;
        dispatch(
          addUser({
            name: tokenResponse.firstName,
            lastName: tokenResponse.lastName,
            email: tokenResponse.email,
            password: tokenResponse.localId,
          })
        );
        setUserCreated(true);
        toast.success(`Bienvenido ${tokenResponse.firstName}!`);
        navigate("/home");
      }
    } catch (error) {
      setErrorMsg(error.message);
      console.log(error);
    }
  };

  const handleFacebook = async () => {
    try {
      const result = await signInWithFacebook();
      if (result.success === true) {
        dispatch(addUser(result.user));
        setUserCreated(true);
      }
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
              onChange={(e) => {
                setUser({ ...user, name: e.target.value });
                validateInput();
              }}
              placeholder="Nombre"
              className="px-4 py-3 border rounded border-gray-300  text-gray-500 text-sm font-normal h-12"
            />
            {errorMsg.name && <p className="text-red-500">{errorMsg.name}</p>}

            <input
              value={lastName}
              onChange={(e) => {
                setUser({ ...user, lastName: e.target.value });
                validateInput();
              }}
              placeholder="Apellido"
              className="px-4 py-3 border rounded border-gray-300  text-gray-500 text-sm font-normal h-12"
            />
            {errorMsg.lastName && (
              <p className="text-red-500">{errorMsg.lastName}</p>
            )}
            <input
              value={email}
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
                validateInput();
              }}
              placeholder="Correo electrónico"
              className="px-4 py-3 border rounded border-gray-300  text-gray-500 text-sm font-normal h-12"
            />
            {errorMsg.email && <p className="text-red-500">{errorMsg.email}</p>}
            <div className="relative">
              <input
                value={password}
                onChange={(e) => {
                  setUser({ ...user, password: e.target.value });
                  validateInput();
                }}
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
            {errorMsg.password && (
              <p className="text-red-500">{errorMsg.password}</p>
            )}
            {/* Botón Registrar */}
            <button
              className={`text-white py-2 rounded-md text-center h-12 ${
                isValid ? "bg-green-500" : "bg-gray-400"
              }`}
            >
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
              <button
                className="flex items-center justify-center px-4 py-2 rounded-md border border-gray-300 w-full h-12"
                onClick={handleGoogle}
              >
                <FcGoogle className="h-5 w-5 mr-2" />
                <span className="text-gray-700 font-bold text-sm">Google</span>
              </button>

              <button
                className="flex items-center justify-center px-4 py-2 rounded-md border border-gray-300 w-full h-12"
                onClick={handleGithub}
              >
                <GrGithub className="h-5 w-5 mr-2" />
                <span className="text-gray-700 font-bold text-sm">Github</span>
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
