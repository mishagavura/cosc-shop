import React from 'react';
import { Typography, Grid, Card, CardContent, Button } from '@mui/material';

export default function AdminDashboard() {
  // Admin functionalities: link to manage products, customers, orders, reports
  return (
    <div>
      <Typography variant="h4" gutterBottom>Admin Portal</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography>Manage Products</Typography>
              <Button href="/admin/products" variant="contained">View</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography>Manage Customers</Typography>
              <Button href="/admin/customers" variant="contained">View</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography>Manage Orders</Typography>
              <Button href="/admin/orders" variant="contained">View</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography>Reports</Typography>
              <Button href="/admin/reports" variant="contained">View</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
