import { createContext, useState, useEffect } from "react";
import { login, getUser, register } from "./auth";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
      getUser()
        .then((user) => setUser(user))
        .catch(() => {
          setToken(null);
          localStorage.removeItem("token");
        });
    }
  }, []);

  const handleLogin = async (email, password) => {
    try {
      const response = await login(email, password);
      console.log(response);
  
      if (response.token && response.user) {
        setToken(response.token);
        localStorage.setItem("token", response.token);
        setUser(response.user);
        return { success: true };
      } else {
        return { success: false, message: "Error en el servidor. Intenta de nuevo." };
      }
    } catch (error) {
      if (error.message) {
        return { success: false, message: error.message };
      } else {
        return { success: false, message: "Error al conectar con el servidor. Intenta de nuevo." };
      }
    }
  };

  const handleRegister = async (name, email, password) => {
    try {
      const response = await register(name, email, password);
      return { success: true, message: "Registro exitoso" };
    } catch (error) {
      return { success: false, message: error };
    }
  };

  const handleLogout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider value={{ token, user, handleLogin, handleLogout, handleRegister }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
