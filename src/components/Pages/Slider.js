import React from 'react';
import coverPicone from '../../Images/SlidersPics/coverpicOne.jpg'
import coverPicTwo from '../../Images/SlidersPics/coverpicTwo.png'

import '../Pages/Slider.css'

const Slider = () => {
    return (
        <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active c-item">
            <img src={coverPicone} class="d-block w-100 c-image" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              <h1 class=" text-capitalize">Sale 20% off</h1>
              <h5 class="display-1 fw-bolder text-capitalize text-white-50">On Everything</h5>
              <button class="btn btn-outline-warning px-4 py-2" type="submit">Shop Now</button>
            </div>
          </div>
          <div class="carousel-item c-item">
            <img src={coverPicTwo} class="d-block w-100 c-image" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              
            </div>
          </div>
          <div class="carousel-item c-item">
            <img src={coverPicTwo} class="d-block w-100 c-image" alt="..."/>
            <div class="carousel-caption d-none d-md-block">
              
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>  
        

    
    )
}

export default Slider
