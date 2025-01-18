"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react'; // Import ReactNode

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  size: string;
  description: string;
}

interface CartContextProps {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
}

// Creating CartContext with a default value of undefined
const CartContext = createContext<CartContextProps | undefined>(undefined);

// Custom hook to use cart context
export const useCart = (): CartContextProps => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// Define the CartProvider component with correctly typed children
interface CartProviderProps {
  children: ReactNode; // Correct typing for children prop
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => { // Destructure children and ensure correct typing
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children} {/* Render children here */}
    </CartContext.Provider>
  );
};
