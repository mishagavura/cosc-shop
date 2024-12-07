import axios from 'axios';

export async function fetchProducts() {
  const res = await axios.get('/api/products');
  return res.data;
}

export async function fetchProductById(id: number) {
  const res = await axios.get(`/api/products/${id}`);
  return res.data;
}

export async function fetchCartItems() {
  const res = await axios.get('/api/cartItems');
  return res.data;
}