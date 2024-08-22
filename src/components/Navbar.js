import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Totality Property Rentals
        </Typography>
        <Button component={Link} to="/" color="inherit">Home</Button>
        <Button component={Link} to="/booking" color="inherit">Booking</Button>
        <Button component={Link} to="/checkout" color="inherit">Checkout</Button>
        <Button component={Link} to="/signup" color="inherit">Sign Up</Button>
        <Button component={Link} to="/login" color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
