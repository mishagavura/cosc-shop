'use client';

import React, { useState, useEffect } from 'react';
import { Typography, Box, List, ListItem, Button, TextField } from '@mui/material';

// Update CartItem type to match the JSON structure
interface CartItem {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  inventory: { warehouse: string; quantity: number }[];
}

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const cartItemsString = localStorage.getItem('cart');
      if (!cartItemsString) {
        throw new Error('No cart items found in localStorage');
      }
      setCartItems(JSON.parse(cartItemsString));
    } catch (err: any) {
      setError(err.message);
    }
  }, []);

  const removeItem = (id: number) => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  const updateQuantity = (id: number, delta: number) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === id) {
        const newQuantity = item.inventory[0].quantity + delta;
        if (newQuantity >= 0) {
          return {
            ...item,
            inventory: [{ ...item.inventory[0], quantity: newQuantity }]
          };
        }
      }
      return item;
    });
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  if (error) {
    return (
      <Box>
        <Typography variant="h4" gutterBottom>Shopping Cart</Typography>
        <Typography color="error">Error: {error}</Typography>
      </Box>
    );
  }

  if (cartItems.length === 0) {
    return (
      <Box>
        <Typography variant="h4" gutterBottom>Shopping Cart</Typography>
        <Typography>Your cart is empty.</Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Shopping Cart</Typography>
      <List>
        {cartItems.map((item: CartItem) => (
          <ListItem key={item.id} sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px' }} />
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button onClick={() => updateQuantity(item.id, -1)}>-</Button>
              <TextField
                type="number"
                value={item.inventory[0].quantity}
                size="small"
                sx={{ width: '60px', backgroundColor: '#ffffff' }}
                inputProps={{ readOnly: true }}
              />
              <Button onClick={() => updateQuantity(item.id, 1)}>+</Button>
            </Box>
            <Button variant="outlined" color="error" onClick={() => removeItem(item.id)}>Remove</Button>
          </ListItem>
        ))}
      </List>
      <Button variant="contained" color="primary" href="/checkout">Checkout</Button>
    </Box>
  );
};

export default CartPage;
