// import React from 'react'
// import { useParams } from 'react-router-dom'
// import { Link } from 'react-router-dom';

// const ProductDetails = () => {
//     const params = useParams();
//     console.log(params.ProductId)
//   return (
//     <>
//       <h1>Product Details</h1>
//       <p>{params.ProductId}</p>
//     </>
//   )
// }

// export default ProductDetails
// -------------------------------------
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import {products} from './Product'
// import './ProductDeatil.css'; // Import the CSS file

// const ProductDetails = () => {
//   const { ProductId } = useParams();
//   console.log('ProductId:', ProductId); 
//   const product = products.find((product) => product.title.trim() === ProductId.trim());


//   if (!product) {
//     return <div className="not-found">Product not found.</div>;
//   }

//   return (
//     <div className="product-details-container">
//       <h1 className="product-title">{product.title}</h1>
//       <p className="product-price">Price: Rs. {product.price}</p>
//       <img src={product.imageUrl} alt={product.title} className="product-image" />
//     </div>
//   );
// };

// export default ProductDetails;

// ------------------------
// ProductDetails.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from './Product'
import './ProductDeatil.css'; // Import the CSS file
import { useCart } from '../Cart/CartContext';


const ProductDetails = () => {
  const { ProductId } = useParams();

  const { addToCart } = useCart(); // Move the useCart hook inside the component

  const handleAddToCart = (product) => {
    addToCart(product);
  };
  
  const product = products.find((product) => product.title.trim() === ProductId);

  if (!product) {
    return <div className="not-found">Product not found.</div>;
  }

  return (
    <div className="product-details-container">
      <div className="product-image">
        <img src={product.imageUrl} alt={product.title} />
      </div>
      <div className="product-info">
        <h1 className="product-title">{product.title}</h1>
        <p className="product-price">Price: Rs. {product.price}</p>
        <p className="product-description">
          This is a detailed product description. You can add more information about the product here.
        </p>
        <button className="add-to-cart-button"
          onClick={() => handleAddToCart(product)}
        >Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;

