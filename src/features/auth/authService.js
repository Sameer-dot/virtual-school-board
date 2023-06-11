import axios from "axios";

const API_URL = "https://0aa1-119-155-13-241.ngrok-free.app/api/users/";

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL + 'signup', userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
