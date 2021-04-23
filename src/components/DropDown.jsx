import React from 'react';
import "../stylesheets/DropDown.css";
const DropDown = () => {

    const showDropDown = () => {
        document.getElementById("nav-dropdown").classList.toggle("show");
    }
  
    window.onclick = (e) => {
      if (e.target.className !== "dropbtn") {
        document.getElementById("nav-dropdown").classList.toggle("show");
      }
    }

    return (
        <div className="dropdown">
            <button onClick={showDropDown} className="dropbtn">Dropdown Menu</button>
            <div id="nav-dropdown" className="dropdown-content">
                <a href="#">Route 1</a>
                <a href="#">Route 2</a>
                <a href="#">Route 3</a>
            </div>
        </div>
  )
};

export default DropDown;
