import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import authService from '../services/authService';
import cartService from '../services/cartService'; // Assuming you have a cartService

const PropertyCard = ({ property }) => {
  const history = useHistory();

  const handleBookNow = (property) => {
    if (!authService.isAuthenticated()) {
      history.push('/login'); // Redirect to login page if not authenticated
    } else {
      cartService.addToCart(property); // Add the property to the cart
      history.push('/cart'); // Redirect to cart page after adding the property
    }
  };

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
        <Button variant="contained" color="primary" onClick={() => handleBookNow(property)}>
          Book Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
