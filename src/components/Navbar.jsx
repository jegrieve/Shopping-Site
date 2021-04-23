import React from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheets/Navbar.css';
import DropDown from "./DropDown";


const Navbar = (props) => {
  return (
    <div className="site-navbar d-flex justify-content-around align-items-center" data-testid="Navbar">
      <DropDown />
      <NavLink to="/">Home</NavLink>
      <NavLink to="/shop">Shop</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </div>
  );
};

export default Navbar;
