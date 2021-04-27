import React from 'react';
import SideNavLinks from "./SideNavLinks";

const SideNav = () => {
  return (
  <div className = "side-nav" data-testid="SideNav">
    <SideNavLinks />
  </div>
  );
};

export default SideNav;
