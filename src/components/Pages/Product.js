import React from 'react';
import imageOne from '../../Images/products/imgOne.jpg';
import imgTwo from '../../Images/products/imgTwo.jpg';
import imgThree from '../../Images/products/imgThree.jpg';
import imgFour from '../../Images/products/imgFour.jpg';
import imgFive from '../../Images/products/imgFive.jpg';
import { useCart } from '../Cart/CartContext';
import { Link } from 'react-router-dom';

export const products = [
  {
    title: 'Colors ',
    price: 100,
    imageUrl: imgFive,
  },
  {
    title: 'Pink Painting ',
    price: 50,
    imageUrl: imgTwo,
  },
  {
    title: 'Black Ring',
    price: 70,
    imageUrl: imgThree,
  },
  {
    title: 'Pink Dressed Girl',
    price: 100,
    imageUrl: imgFour,
  },
  {
    title: 'Black Colors',
    price: 70,
    imageUrl: imageOne,
  },
  {
    title: ' Colors',
    price: 70,
    imageUrl: imgFive,
  },
];


const Product = (props) => {
  const { addToCart } = useCart(); // Access the addToCart function from the context

  const handleAddToCart = (product) => {    
      console.log('Adding to cart:', product);
      addToCart(product);    
  };

  return (
    <>
      <div className="container-fluid bg-warning">
        <div className="container">
          <h1 className="fs-1 text-center text-capitalize">Music</h1>
          <div className="row gy-3">
            {products.map((product, index) => (
              <div className="col-4" key={index}>
                <div className="card">
                  <img src={product.imageUrl} className="card-img-top" alt="Product" />
                  <div className="card-body">
                    <h1 className="card-title">{product.title}</h1>
                    <h4 className="card-text">Rs. {product.price}</h4>
                    <button
                      type="submit"
                      className="btn btn-outline-warning px-4 py-2"
                      onClick={() => handleAddToCart(product)}
                    >
                      ADD TO CART
                    </button>
                    <Link to={`/products/${product.title}`} className="btn btn-link">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="container my-md-3">
          <div className="row">
            <div className="col text-center">
              <Link to="/cart" className="btn btn-success">
                See the Cart
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default Product;




