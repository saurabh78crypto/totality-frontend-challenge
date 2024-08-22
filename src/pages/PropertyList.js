import React, { useState, useEffect } from 'react';
import { Grid, Container } from '@mui/material';
import PropertyCard from '../components/PropertyCard';
import Filter from '../components/Filter';
import propertyService from '../services/propertyService';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      const data = await propertyService.getProperties();
      setProperties(data);
      setFilteredProperties(data);
    };
    fetchProperties();
  }, []);

  const handleFilter = (filters) => {
    const filtered = propertyService.filterProperties(properties, filters);
    setFilteredProperties(filtered);
  };

  const handleBooking = (property) => {
    // Logic for handling booking
  };

  return (
    <Container>
      <Filter onFilter={handleFilter} />
      <Grid container spacing={4}>
        {filteredProperties.map((property) => (
          <Grid item xs={12} sm={6} md={4} key={property.id}>
            <PropertyCard property={property} onBook={handleBooking} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PropertyList;
