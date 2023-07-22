import React, { createContext, useContext, useState } from "react";
import { auth } from "../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

// Creando el Contexto
export const authContext = createContext();

// Hook Personalizado
export const useAuth = () => {
  return useContext(authContext);
};

// Proveedores de Google y Facebook
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState(null);

  const register = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      setCurrentUser(user);
      return userCredential;
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorMessage);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      const user = userCredential.user;
      setCurrentUser(user);
      return userCredential;
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorMessage);
    }
  };

  const signInWithFacebook = async () => {
    try {
      const userCredential = await signInWithPopup(auth, facebookProvider);
      const user = userCredential.user;
      setCurrentUser(user);
      return userCredential;
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorMessage);
    }
  };

  // Valores proporcionados a través del Contexto
  const value = {
    currentUser,
    register,
    signInWithGoogle,
    signInWithFacebook,
    error,
  };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};
