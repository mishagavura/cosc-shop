import React from 'react';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import Link from 'next/link';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My E-commerce',
  description: 'A demo e-commerce app'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                My E-Commerce
              </Link>
            </Typography>
            <Box>
              <Link href="/account/login" style={{ textDecoration: 'none', color: 'inherit', marginRight: '1rem' }}>
                <Button color="inherit">Login</Button>
              </Link>
              <Link href="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Button color="inherit">Cart</Button>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
        <Box sx={{ padding: '1rem' }}>
          {children}
        </Box>
      </body>
    </html>
  );
}
