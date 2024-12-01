import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5271/api",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const login = async (email, password) => {
  try {
    const response = await api.post("/Login", { email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data || "Error en la solicitud de login";
  }
};

const register = async (name, email, password) => {
  try {
    const newDate = new Date();
    const formattedDate = newDate.toISOString();

    const response = await api.post("/Users", { name, email, password, registerDate: formattedDate });
    return response.data;
  } catch (error) {
    throw error.response?.data || "Error en la solicitud de registro";
  }
};

const getUser = async () => {
  try {
    const response = await api.get("/Users");
    return response.data;
  } catch (error) {
    throw error.response?.data || "Error al obtener el usuario";
  }
};

const logout = async () => {
    try 
    {
        await api.post('/Logout');
    }
    catch (error) 
    {
        throw error;
    }
};

export { login, getUser, register, logout };
