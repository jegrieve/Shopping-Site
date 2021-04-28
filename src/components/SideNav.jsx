import React from 'react';
import SideNavLinks from "./SideNavLinks";
import SideBarDeal from "./SideBarDeal";

const SideNav = () => {
  return (
  <div className = "side-nav" data-testid="SideNav">
    <SideNavLinks />
    <SideBarDeal />
  </div>
  );
};

export default SideNav;
