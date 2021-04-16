import React from 'react';
import { NavLink } from 'react-router-dom';
import '../stylesheets/Navbar.css';

const Navbar = () => {
  return (
    <div className="site-navbar d-flex justify-content-around align-items-center" data-testid="Navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/shop">Shop</NavLink>
      <NavLink to="/cart">Cart</NavLink>
    </div>
  );
};

export default Navbar;
