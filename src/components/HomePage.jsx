import React, {useState, useEffect} from 'react';
import Carousel from "./Carousel";
import SideNav from "./SideNav";
import CartNav from "./CartNav";
import "../stylesheets/Homepage.css";
import "../stylesheets/SideNav.css";

const HomePage = (props) => {
    return (
      <div className = "container-fluid" data-testid="HomePage">
        <div className = "row">
          <div id = "homepage-side-nav" className = "col-3"><SideNav /></div>
          <div className = "col-6"><Carousel /></div>
          <div className = "col-3"><CartNav /></div>
        </div>
      </div>
    )
};

export default HomePage;
