import React from 'react';
import { NavLink } from "react-router-dom";

const SideNavLinks = () => {
  return (
  <div>
      <div>
        <NavLink to = "/">Computers</NavLink>
      </div>
      <div>
        <NavLink to = "/">Laptops</NavLink>
      </div>
      <div>
        <NavLink to = "/">Monitors</NavLink>
      </div>
      <div>
        <NavLink to = "/">TVs</NavLink>
      </div>
      <div>
        <NavLink to = "/">Gaming</NavLink>
      </div>
      <div>
        <NavLink to = "/">Accessories</NavLink>
      </div>
      <div>
        <NavLink to = "/">Software</NavLink>
      </div>
  </div>
  )
};

export default SideNavLinks;