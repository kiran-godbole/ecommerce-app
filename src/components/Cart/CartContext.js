import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    // Check if the product is already in the cart
    const existingProduct = cartItems.find((item) => item.title === product.title);

    if (existingProduct) {
      // If the product exists, increase its quantity
      const updatedCart = cartItems.map((item) =>
        item.title === product.title ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      // If the product doesn't exist, add it to the cart
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    
};

const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

const removeFromCart = (product) => {
    const updatedCart = cartItems.filter((item) => item.title !== product.title);
    setCartItems(updatedCart);
  };
  
  return (
    <CartContext.Provider value={{ cartItems, addToCart, cartCount, removeFromCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
