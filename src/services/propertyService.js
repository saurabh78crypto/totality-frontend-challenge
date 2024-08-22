import axios from 'axios';

const API_URL = 'http://localhost:5000/api/properties'; // Adjust with your backend API

const propertyService = {
  getProperties: async () => {
    const response = await axios.get(API_URL);
    return response.data;
  },
  filterProperties: (properties, filters) => {
    return properties.filter(property => {
      const matchesLocation = property.location.toLowerCase().includes(filters.location.toLowerCase());
      const matchesPrice = property.price <= filters.priceRange;
      const matchesBedrooms = !filters.bedrooms || property.bedrooms === Number(filters.bedrooms);
      return matchesLocation && matchesPrice && matchesBedrooms;
    });
  },
};

export default propertyService;
