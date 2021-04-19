import React from 'react';
import Carousel from "./Carousel";

const HomePage = () => {
  //next thing to work on is the left column bar
  //then go from there
  return (
    <div className = "container-fluid" data-testid="HomePage">
      <div className = "row">
        <div className = "col-3">test</div>
        <div className = "col-6"><Carousel /></div>
        <div className = "col-3">test</div>
      </div>
      
    </div>
  )
};

export default HomePage;
