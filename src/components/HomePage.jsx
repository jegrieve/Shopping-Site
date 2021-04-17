import React from 'react';
import Carousel from "./Carousel";

const HomePage = () => {
  return (
    <div data-testid="HomePage">
      <div className = "row">
        <div className = "col-6"><Carousel /></div>
        <div className = "col-6">test</div>
      </div>
      
    </div>
  )
};

export default HomePage;
