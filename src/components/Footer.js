import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ mt: 4, p: 2, textAlign: 'center', backgroundColor: '#f1f1f1' }}>
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Totality Property Rentals. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
