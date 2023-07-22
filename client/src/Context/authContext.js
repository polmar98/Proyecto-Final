import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

// CONTEXTO GENERAL
export const authContext = createContext();

// HOOK PERSONALIZADO
export const useAuth = () => {
  // esto contiene la infomacion del usuario
  const context = useContext(authContext);
  return context;
};

export const AuthProvider = ({ children }) => {
  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  return (
    <authContext.Provider value={{ signup }}>{children}</authContext.Provider>
  );
};
