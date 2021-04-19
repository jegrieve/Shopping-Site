import React from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheets/Navbar.css';


const Navbar = (props) => {

  const sideNavControl = () => {
    props.setShowSideNav(!props.showSideNav)
  }

  return (
    <div className="site-navbar d-flex justify-content-around align-items-center" data-testid="Navbar">
      <button onClick = {sideNavControl}>Show Side Nav</button>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/shop">Shop</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </div>
  );
};

export default Navbar;
