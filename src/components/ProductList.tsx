'use client';

import React, { useState } from 'react';
import { Grid, Typography, TextField } from '@mui/material';
import ProductCard from './ProductCard';
import staticDatabase from '../../db.json';
import { Product } from '../types';

export default function ProductList() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter products based on search term
  const filteredProducts = staticDatabase.products.filter((product) => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <TextField
        fullWidth
        variant="outlined"
        label="Search Products"
        placeholder="Search by name, description, or category"
        sx={{ mb: 2, backgroundColor: '#ffffff' }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {filteredProducts.length === 0 ? (
        <Typography variant="body1" sx={{ textAlign: 'center', mt: 2 }}>
          No products match your search
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
}