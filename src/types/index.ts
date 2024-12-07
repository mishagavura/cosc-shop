export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;
    description: string;
    inventory: { warehouse: string; quantity: number }[];
  }
  
  export interface User {
    id: number;
    username: string;
    password?: string;
    email: string;
    address: string;
    orders: Order[];
  }
  
  export interface CartItem {
    productId: number;
    quantity: number;
  }
  
  export interface Order {
    id: number;
    userId: number;
    items: { productId: number; quantity: number }[];
    status: string;
    shippingAddress: string;
    paymentInfo: string;
  }
  