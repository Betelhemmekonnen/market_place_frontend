// userService.js
import axios from 'axios';
const API_URI = "http://localhost:5000";
const loginUser = async (credentials) => {
  try {
    const response = await axios.post(API_URI + '/loginuser', credentials);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};
const registerUser = async (credentials) => {
	try {
	  const response = await axios.post(API_URI +'/registeruser', credentials);
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
  