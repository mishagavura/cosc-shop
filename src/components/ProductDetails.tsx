// ProductDetailClient.tsx (Client Component)
'use client';

import React from 'react';
import { Typography, Button, Box, TextField } from '@mui/material';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  price: number;
  inventory: { warehouse: string; quantity: number }[];
}

export default function ProductDetailClient({ product }: { product: Product }) {
  const [reviews, setReviews] = React.useState<string[]>([]);

  React.useEffect(() => {
    const storedReviews = localStorage.getItem(`reviews-${product.id}`);
    setReviews(storedReviews ? JSON.parse(storedReviews) : []);
  }, [product.id]);

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
  };

  const handleAddReview = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newReview = formData.get('review')?.toString() || '';

    if (!newReview) {
      alert('Please enter a review.');
      return;
    }

    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
    localStorage.setItem(`reviews-${product.id}`, JSON.stringify(updatedReviews));
    alert('Review submitted!');
    e.currentTarget.reset();
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
        <Box component="form" onSubmit={handleAddReview} sx={{ mt: 2 }}>
          <TextField
            label="Add a review"
            name="review"
            variant="outlined"
            fullWidth
            sx={{ mt: 2, backgroundColor: '#ffffff' }}
          />
          <Button 
            type="submit"
            variant="contained" 
            color="secondary" 
            sx={{ mt: 2 }}
          >
            Submit Review
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
