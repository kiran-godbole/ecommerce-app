import React from 'react'
import imageOne from '../../Images/products/imgOne.jpg';
import imgTwo from '../../Images/products/imgTwo.jpg';
import imgThree from '../../Images/products/imgThree.jpg';
import imgFour from '../../Images/products/imgFour.jpg';
import imgFive from '../../Images/products/imgFive.jpg'
import '../Pages/Produt.css';
import Footer from '../Footer/Footer';

const ProductDetail = () => {

  return (
    <>
      <div class="container-fluid bg-warning " >
        <div class="container ">
          <h1 class="fs-1  text-center text-capitalize">Music</h1>
          <div className="row gy-3">
            <div className="col-4">
              <div class="card" >
                <img src={imageOne} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h1 class="card-title">Album 1</h1>
                  <h4 class="card-text  "> $96.85</h4>
                  <button type="submit" class="btn btn-outline-warning px-4 py-2">ADD TO CART</button>
                </div>
              </div>

            </div>
            <div className="col-4">
              <div class="card" >
                <img src={imgTwo} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h1 class="card-title">Album 2</h1>
                  <h4 class="card-text"> $96.85</h4>
                  <button type="submit" class="btn btn-outline-warning px-4 py-2">ADD TO CART</button>
                </div>
              </div>

            </div>
            <div className="col-4">
              <div class="card" >
                <img src={imgFour} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h1 class="card-title">Album 3</h1>
                  <h4 class="card-text"> $96.85</h4>
                  <button type="submit" class="btn btn-outline-warning px-4 py-2">ADD TO CART</button>
                </div>
              </div>

            </div>
            <div className="col-4">
              <div class="card " >
                <img src={imgTwo} class="card-img-top" alt="..." />
                <div class="card-body ">
                  <h1 class="card-title">Album 4</h1>
                  <h4 class="card-text "> $96.85</h4>
                  <button type="submit" class="btn btn-outline-warning px-4 py-2 ">ADD TO CART</button>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div class="card" >
                <img src={imgFive} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h1 class="card-title">Album 5</h1>
                  <h4 class="card-text"> $96.85</h4>
                  <button type="submit" class="btn btn-outline-warning px-4 py-2">ADD TO CART</button>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div class="card" >
                <img src={imgThree} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h1 class="card-title">Album 6</h1>
                  <h4 class="card-text"> $96.85</h4>
                  <button type="submit" class="btn btn-outline-warning px-4 py-2">ADD TO CART</button>
                </div>
              </div>
            </div>
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
