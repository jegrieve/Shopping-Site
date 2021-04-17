import React from 'react';
import testImage from '../images/dalmatian.jpg';

const Carousel = () => {
    //might use bs might not use just placehold for now
  return (
    <div data-testid="Carousel">
<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img height = {500} className="d-block w-100" src={testImage} alt="First slide" />
    </div>
    <div className="carousel-item">
      <img height = {500} className="d-block w-100" src={testImage} alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img height = {500} className="d-block w-100" src={testImage} alt="Third slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    </div>
  )
};

export default Carousel;
