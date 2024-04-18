// userService.js
import axios from 'axios';
axios.defaults.withCredentials = true;
const API_URI = "http://localhost:5000";

const loginUser = async (email, password) => {
  try {
    const data = {
      email: email,
      password: password
    };
    const response = await axios.post(API_URI + '/loginuser', data, { withCredentials: true });
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

const registerUser = async (credentials) => {
  try {
    const response = await axios.post(API_URI + '/registeruser', credentials, { withCredentials: true });
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

const authService = {
  registerUser,
  loginUser,
};

export default authService;
