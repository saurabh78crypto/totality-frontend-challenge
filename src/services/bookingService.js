import axios from 'axios';

const API_URL = 'http://localhost:5000/api/bookings'; // Adjust with your backend API

const bookingService = {
  createBooking: async (bookingData) => {
    const response = await axios.post(API_URL, bookingData);
    return response.data;
  },
  getBookings: async () => {
    const response = await axios.get(API_URL);
    return response.data;
  },
  cancelBooking: async (bookingId) => {
    const response = await axios.delete(`${API_URL}/${bookingId}`);
    return response.data;
  },
};

export default bookingService;
