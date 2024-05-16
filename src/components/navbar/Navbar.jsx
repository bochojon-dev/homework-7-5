import React from "react";
import logo from "../../assets/logo.png";
import search from "../../assets/search.svg";
import "../navbar/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="nav_contents">
          <ul>
            <li>Home</li>
            <li>Shop All</li>
            <li>Blog</li>
          </ul>
          <div className="logo">
            <Link to={"/"}>
              <img src={logo} alt="logo" />
            </Link>
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
  );
};

export default Navbar;
