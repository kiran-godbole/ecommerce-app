import React,{useState} from 'react'
import { FiShoppingCart } from "react-icons/fi"
const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      quantity: 2,
    },
    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      quantity: 3,
    },
    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      quantity: 1,
    },
  ]);

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  return (
    <div>
      <div class="btn dropstart">
        <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          <FiShoppingCart className='cart-trolley' />
          <span className='cart-total'>
            {cartItems.length}
          </span>
        </button>
        <div className="dropdown-menu">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.imageUrl} alt={item.title} />
              <div className="cart-item-details">
                <h5>{item.title}</h5>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Cart

