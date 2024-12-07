import React from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';

export default function RegisterPage() {
  return (
    <Box sx={{ maxWidth: 400 }}>
      <Typography variant="h4" gutterBottom>Register</Typography>
      <TextField label="Username" fullWidth margin="normal" sx={{ backgroundColor: '#f5f5f5', borderRadius: '10px' }} />
      <TextField label="Email" fullWidth margin="normal" sx={{ backgroundColor: '#f5f5f5', borderRadius: '10px' }} />
      <TextField label="Password" type="password" fullWidth margin="normal" sx={{ backgroundColor: '#f5f5f5', borderRadius: '10px' }} />
      <TextField label="Address" fullWidth margin="normal" sx={{ backgroundColor: '#f5f5f5', borderRadius: '10px' }} />
      <Button variant="contained" color="primary" fullWidth>Create Account</Button>
    </Box>
  );
}
