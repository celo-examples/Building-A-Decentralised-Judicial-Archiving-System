import React from "react";

import logo from "./logo512.png";

const NavbarItem = ({ title, classprops }) => <li>{title}</li>;

const Navbar = () => {
  return (
    <div className="nav">
      <nav className="navbar">
        <ul>
          <img src={logo} alt="logo" className="logo" />
          {["About Us", "Mission", "FAQ", "Contact"].map((item, index) => (
            <NavbarItem key={item + index} title={item} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
