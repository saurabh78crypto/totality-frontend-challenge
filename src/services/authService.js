import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth'; // Adjust with your backend API

const authService = {
  signup: async (userData) => {
    const response = await axios.post(`${API_URL}/signup`, userData);
    localStorage.setItem('user', JSON.stringify(response.data)); // Store user data in localStorage
    return response.data;
  },

  login: async (credentials) => {
    const response = await axios.post(`${API_URL}/login`, credentials);
    localStorage.setItem('user', JSON.stringify(response.data)); // Store user data in localStorage
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('user');
  },

  getCurrentUser: () => {
    return JSON.parse(localStorage.getItem('user'));
  },

  isAuthenticated: () => {
    return !!localStorage.getItem('user');
  },
};

export default authService;
