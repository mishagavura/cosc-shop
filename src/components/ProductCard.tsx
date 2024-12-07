import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import Link from 'next/link';
import { Product } from '@/types';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <Card>
      <Link href={`/products/${product.id}`}>
        <CardMedia
          component="img"
          height="140"
          image={product.image}
          alt={product.name}
        />
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h6">{product.name}</Typography>
        <Typography variant="body2" color="text.secondary">${product.price}</Typography>
      </CardContent>
      <CardActions>
        <Link href={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
          <Button size="small">View</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
