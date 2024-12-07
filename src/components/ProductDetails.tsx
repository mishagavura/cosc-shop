'use client';

import React, { useState } from 'react';
import { Typography, Button, Box } from '@mui/material';
import Image from 'next/image';

interface Product {
  name: string;
  description: string;
  price: number;
  image: string;
}

export default function ProductDetails({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product.name} to cart.`);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {product.name}
      </Typography>
      {product.image && (
        <Box sx={{ mb: 2 }}>
          <Image src={product.image} alt={product.name} width={300} height={300} />
        </Box>
      )}
      <Typography variant="body1" gutterBottom>
        {product.description}
      </Typography>
      <Typography variant="h6" gutterBottom>
        ${product.price}
      </Typography>
      <Box>
        <Button onClick={handleAddToCart} variant="contained" color="primary">
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
}
