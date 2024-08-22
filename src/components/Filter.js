import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const Filter = ({ onFilter }) => {
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [bedrooms, setBedrooms] = useState('');

  const handleFilter = () => {
    onFilter({ location, priceRange, bedrooms });
  };

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6">Filter Properties</Typography>
      <TextField
        label="Location"
        variant="outlined"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        sx={{ mr: 2 }}
      />
      <TextField
        label="Max Price"
        variant="outlined"
        value={priceRange}
        onChange={(e) => setPriceRange(e.target.value)}
        sx={{ mr: 2 }}
      />
      <TextField
        label="Bedrooms"
        variant="outlined"
        value={bedrooms}
        onChange={(e) => setBedrooms(e.target.value)}
        sx={{ mr: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleFilter}>
        Apply Filters
      </Button>
    </Box>
  );
};

export default Filter;
