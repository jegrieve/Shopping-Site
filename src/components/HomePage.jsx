import React, {useState, useEffect} from 'react';
import Carousel from "./Carousel";
import SideNav from "./SideNav";
import CartNav from "./CartNav";
import "../stylesheets/Homepage.css";
import "../stylesheets/SideNav.css";

const HomePage = (props) => {
  useEffect(() => {
    const sideNavEl = document.getElementById("homepage-side-nav")
    if (props.showSideNav) {
      sideNavEl.classList.remove("invisible")
      sideNavEl.classList.add("visible")
    } else {
      sideNavEl.classList.add("invisible")
      sideNavEl.classList.remove("visible")
    }
  })

    return (
      <div className = "container-fluid" data-testid="HomePage">
        <div className = "row">
          <div id = "homepage-side-nav" className = "col-3 invisible"><SideNav /></div>
          <div className = "col-6"><Carousel /></div>
          <div className = "col-3">This will be empty, show cartsidenav</div>
        </div>
      </div>
    )
};

export default HomePage;
