// src/app/products/[id]/page.tsx

import React from 'react';
import { notFound } from 'next/navigation';
import staticDatabase from '../../../../db.json';
import ProductDetailClient from '@/components/ProductDetails';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  price: number;
  inventory: { warehouse: string; quantity: number }[];
}

// Since this is a dynamic route, we do not need to wrap `params` in a promise
// Directly get the `params` as part of the component props

interface PageProps {
  params: { id: string };  // The `id` will be a string from the dynamic URL
}

export default function ProductDetailPage({ params }: any) {
  const { id } = params;
  
  // Fetch the product using staticDatabase
  const product = staticDatabase.products.find((p) => p.id === Number(id)) || null;

  if (!product) {
    notFound();
  }

  return (
    <ProductDetailClient product={product} />
  );
}
