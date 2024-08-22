import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const PropertyCard = ({ property, onBook }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={property.imageUrl}
        alt={property.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {property.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {property.description}
        </Typography>
        <Typography variant="h6" component="div" color="primary">
          ${property.price}/night
        </Typography>
        <Button variant="contained" color="primary" onClick={() => onBook(property)}>
          Book Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
