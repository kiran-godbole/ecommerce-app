// import React, { createContext, useContext, useState } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     // Check if the product is already in the cart
//     const existingProduct = cartItems.find((item) => item.title === product.title);

//     if (existingProduct) {
//       // If the product exists, increase its quantity
//       const updatedCart = cartItems.map((item) =>
//         item.title === product.title ? { ...item, quantity: item.quantity + 1 } : item
//       );
//       setCartItems(updatedCart);
//     } else {
//       // If the product doesn't exist, add it to the cart
//       setCartItems([...cartItems, { ...product, quantity: 1 }]);
//     }

// };

// const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

// const removeFromCart = (product) => {
//     const updatedCart = cartItems.filter((item) => item.title !== product.title);
//     setCartItems(updatedCart);
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, cartCount, removeFromCart, cartCount }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   return useContext(CartContext);
// };



//2nd working one
// import React, { createContext, useContext, useState, useEffect } from 'react';

// const CartContext = createContext();



// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState(()=>{
//     // Load cart items from localStorage on component mount
//     const storedCartItems = localStorage.getItem('cartItems');
//     return storedCartItems ? JSON.parse(storedCartItems) : [];
//   });
  
  
//   const userEmailId = localStorage.getItem('userEmailId'); 

//   useEffect(() => {
//     // Save cart items to localStorage whenever it changes
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
//   }, [cartItems]);
  

//   const addToCart = async (product) => {
//     // Check if the product is already in the cart
//     const existingProduct = cartItems.find((item) => item.title === product.title);

//     if (existingProduct) {
//       // If the product exists, increase its quantity
//       const updatedCart = cartItems.map((item) =>
//         item.title === product.title ? { ...item, quantity: item.quantity + 1 } : item
//       );
//       setCartItems(updatedCart);
//     } else {
//       // If the product doesn't exist, add it to the cart
//       setCartItems([...cartItems, { ...product, quantity: 1 }]);
//     }

    
//     const modifiedEmailId = userEmailId ? userEmailId.split(/[@.]/).join('') : '';


//     // Make a POST request to the curd api
//     console.log(product, modifiedEmailId)
//     try {
//       const response =  await fetch(`https://crudcrud.com/api/bdea4cf94f43472ba7e783b079bc7022/cart${modifiedEmailId}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify( product ),
//       });

//       if (!response.ok) {
//         console.error('Failed to add ');
//       }
//     } catch (error) {
//       console.error('Network error:', error);
//     }

//   };


//   const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

//   const removeFromCart = (product) => {
//     const updatedCart = cartItems.filter((item) => item.title !== product.title);
//     setCartItems(updatedCart);
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, cartCount, removeFromCart, cartCount }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   return useContext(CartContext);
// };

//3rd time
import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // State to manage cart items
  const [cartItems, setCartItems] = useState(() => {
    // Load cart items from localStorage on component mount
    const storedCartItems = localStorage.getItem('cartItems');
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  // State to manage user email
  const [userEmailId, setUserEmailId] = useState('');

  useEffect(() => {
    // Load user email from wherever you store it (local storage, cookies, etc.)
    const storedUserEmailId = localStorage.getItem('userEmailId');
    setUserEmailId(storedUserEmailId);

    // Save user email to localStorage whenever it changes
    localStorage.setItem('userEmailId', storedUserEmailId);
  }, []); // Only run on component mount

  useEffect(() => {
    // Save cart items to localStorage whenever it changes
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = async (product) => {
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

    const modifiedEmailId = userEmailId ? userEmailId.split(/[@.]/).join('') : '';

    // Make a POST request to the CRUD API
    try {
      const response = await fetch(`https://crudcrud.com/api/bdea4cf94f43472ba7e783b079bc7022/cart${modifiedEmailId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });

      if (!response.ok) {
        console.error('Failed to add item to cart.');
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const removeFromCart = (product) => {
    const updatedCart = cartItems.filter((item) => item.title !== product.title);
    setCartItems(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, cartCount, removeFromCart, userEmailId }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
