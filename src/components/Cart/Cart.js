// Cart.js
import React from "react";
import { useCart } from './CartContext';
import './Cart.css';
import { FiShoppingCart } from "react-icons/fi";

const Cart = () => {
  const { cartCount, cartItems, removeFromCart, loading } = useCart();
  
  // Log cart items and loading state for debugging
  console.log('Cart Items:', cartItems);
  // console.log('Loading:', loading);
  

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
  };

  // Calculate the total cost of all items in the cart
  const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  return (
    <>
      <div className="btn dropstart cart-button">
        <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          <FiShoppingCart className='cart-trolley' />
          <span className='cart-total'>
            {cartCount}
          </span>
        </button>
        <div className="dropdown-menu cart-menu">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul className="list-unstyled">
              {cartItems.map((item, index) => (
                <li key={index}>
                  <img src={item.imageUrl} alt={item.title} className="cart-item-image" /> 
                  <div>{item.title}</div>
                  <div>Quantity: {item.quantity}</div>
                  <div>Price: Rs. {item.price}</div>
                  <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
                </li>
              ))}
            </ul>
            
          )}
          <div className="cart-total">
                Total: Rs. {totalCost}
              </div>

        </div>
      </div>
    </>
  )
}

export default Cart;
