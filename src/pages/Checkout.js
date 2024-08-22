import React from 'react';
import { Container } from '@mui/material';
import CheckoutForm from '../components/CheckoutForm';

const Checkout = () => {
  const handleCheckout = (formData) => {
    // Logic for processing the checkout (e.g., API call)
    console.log('Checkout Data:', formData);
  };

  return (
    <Container>
      <h1>Checkout</h1>
      <CheckoutForm onCheckout={handleCheckout} />
    </Container>
  );
};

export default Checkout;
