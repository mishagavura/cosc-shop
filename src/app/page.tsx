import React from 'react';
import { Typography, Grid } from '@mui/material';
import ProductList from '@/components/ProductList';

export default function Home() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>Welcome to our Store</Typography>
      <ProductList />
    </div>
  );
}
