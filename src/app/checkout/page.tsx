import React from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';

export default function CheckoutPage() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Checkout</Typography>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', maxWidth: 400 }}>
        <TextField label="Customer ID" margin="normal" sx={{ backgroundColor: '#ffffff', borderRadius: '10px' }}/>
        <TextField label="Payment Info" margin="normal" sx={{ backgroundColor: '#ffffff', borderRadius: '10px' }}/>
        <TextField label="Shipping Address" margin="normal" sx={{ backgroundColor: '#ffffff', borderRadius: '10px' }}/>
        <Button variant="contained" color="primary" type="submit">Place Order</Button>
      </Box>
    </Box>
  );
}
