import React from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';

const CheckoutForm = ({ onCheckout }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic for handling checkout
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5">Checkout</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField fullWidth label="Name" variant="outlined" required />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label="Email" variant="outlined" required />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label="Phone" variant="outlined" required />
        </Grid>
        <Grid item xs={12}>
          <TextField fullWidth label="Credit Card Number" variant="outlined" required />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit">
            Complete Booking
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default CheckoutForm;
