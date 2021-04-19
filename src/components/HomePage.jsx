import React from 'react';
import Carousel from "./Carousel";
import SideNav from "./SideNav";
import "../stylesheets/Homepage.css";
import "../stylesheets/SideNav.css";

const HomePage = (props) => {

  if (props.showSideNav) {
    return (
      <div className = "container-fluid" data-testid="HomePage">
        <div className = "row">
          <div className = "col-3 visible"><SideNav /></div>
          <div className = "col-6"><Carousel /></div>
          <div className = "col-3">This will be empty, show cartsidenav</div>
        </div>
      </div>
    )
  } else {
    return (
      <div className = "container-fluid" data-testid="HomePage">
        <div className = "row">
          <div className = "col-3 invisible"><SideNav /></div>
          <div className = "col-6"><Carousel /></div>
          <div className = "col-3">This will be empty, show cartsidenav</div>
        </div>
      </div>
    )
  }

};

export default HomePage;
