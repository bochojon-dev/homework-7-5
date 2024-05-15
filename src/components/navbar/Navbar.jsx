import React from "react";
import logo from "../../assets/logo.png";
import search from "../../assets/search.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="nav_contents">
          <div className="nav_items">
            <ul>
              <li>Home</li>
              <li>Shop All</li>
              <li>Blog</li>
            </ul>
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="search">
              <ul>
                <li>About Us</li>
              </ul>
              <form className="input">
                <input type="text" placeholder="Search Product" />
                <img src={search} alt="search" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
