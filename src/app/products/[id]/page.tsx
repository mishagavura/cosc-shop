'use client';

import React, { useState, useEffect } from 'react';
import { Typography, Button, Box, TextField } from '@mui/material';
import { notFound } from 'next/navigation';
import staticDatabase from '../../../../db.json';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = staticDatabase.products.find(
    (p) => p.id === Number(params.id)
  );

  if (!product) {
    notFound();
  }

  const [reviews, setReviews] = useState<string[]>([]);
  const [newReview, setNewReview] = useState('');

  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem(`reviews-${product.id}`) || '[]');
    setReviews(storedReviews);
  }, [product.id]);

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const handleAddReview = () => {
    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
    localStorage.setItem(`reviews-${product.id}`, JSON.stringify(updatedReviews));
    setNewReview('');
  };

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        {product.name}
      </Typography>
      {product.image && (
        <Box sx={{ mb: 2, textAlign: 'center' }}>
          <img 
            src={product.image} 
            alt={product.name} 
            style={{ 
              maxWidth: '300px', 
              maxHeight: '300px', 
              objectFit: 'contain' 
            }} 
          />
        </Box>
      )}
      <Typography variant="body1" gutterBottom>
        {product.description}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Category: {product.category}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Price: ${product.price}
      </Typography>
      <Typography variant="body2" gutterBottom>
        Inventory:
        {product.inventory.map((inv) => (
          <div key={inv.warehouse}>
            {inv.warehouse} Warehouse: {inv.quantity} units
          </div>
        ))}
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        sx={{ mt: 2 }}
        onClick={handleAddToCart}
      >
        Add to Cart
      </Button>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Reviews
        </Typography>
        {reviews.map((review, index) => (
          <Typography key={index} variant="body2" gutterBottom>
            {review}
          </Typography>
        ))}
        <TextField
          label="Add a review"
          variant="outlined"
          fullWidth
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          sx={{ mt: 2, backgroundColor: '#ffffff' }}
        />
        <Button 
          variant="contained" 
          color="secondary" 
          sx={{ mt: 2 }}
          onClick={handleAddReview}
        >
          Submit Review
        </Button>
      </Box>
    </Box>
  );
}