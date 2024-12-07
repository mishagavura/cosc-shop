import React from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';

export default function LoginPage() {
  return (
    <Box sx={{ maxWidth: 400 }}>
      <Typography variant="h4" gutterBottom>Login</Typography>
      <TextField label="Username" fullWidth margin="normal" />
      <TextField label="Password" type="password" fullWidth margin="normal" />
      <Button variant="contained" color="primary" fullWidth>Login</Button>
      <Typography variant="body2" sx={{ mt: 2 }}>
        <a href="/account/register">Register</a> | <a href="#">Forgot Password?</a>
      </Typography>
    </Box>
  );
}
