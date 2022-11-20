import React from "react";
import Icon from "./icon";
import Logo from "../../assets/logo.png";

const NavHeader = () => {
  return (
    <div className="sidebar-header">
      <button type="button">
        <Icon icon="menu" />
      </button>
      <img src={Logo} className="sidebar-logo" />
    </div>
  );
};

export default NavHeader;
