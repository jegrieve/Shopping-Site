import React from 'react';
import "../stylesheets/DropDown.css";
const DropDown = () => {

    const showDropDown = () => {
        document.getElementById("nav-dropdown").classList.toggle("show");
    }
  
    window.onclick = (event) => {
        if (!event.target.matches('.dropbtn')) {
          let dropdowns = document.getElementsByClassName("dropdown-content");
          for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
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
