import React from 'react'
import imageOne from '../../Images/products/imgOne.jpg';
import imgTwo from '../../Images/products/imgTwo.jpg';
import imgThree from '../../Images/products/imgThree.jpg';
import imgFour from '../../Images/products/imgFour.jpg';
import imgFive from '../../Images/products/imgFive.jpg'

import '../Pages/Produt.css';


const products = [
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


const ProductDetail = () => {

  return (
    <>
      <div class="container-fluid bg-warning " >
        <div class="container ">
          <h1 class="fs-1  text-center text-capitalize">Music</h1>
          <div className="row gy-3">
          {products.map((product, index) => (
            <div className="col-4 ">
              <div class="card " >
                <img src={product.imageUrl} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h1 class="card-title">{product.title}</h1>
                  <h4 class="card-text  ">Rs. {product.price}</h4>
                  <button type="submit" class="btn btn-outline-warning px-4 py-2 ">ADD TO CART</button>
                </div>
              </div>
            </div>
             ))}
          
          </div>
        </div>
        <div class="container my-md-3">
          <div class="row">
            <div class="col text-center">
              <button class="btn btn-success">See the Cart</button>
            </div>
          </div>
        </div>

      
      </div>


    </>
  )
}

export default ProductDetail;
