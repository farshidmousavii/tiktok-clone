import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/tiktok_logo.svg";
import { BiSearch } from "react-icons/bi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="tiktok__navbar">
      <div className="tiktok__navbar-container">
        <div className="tiktok__navbar-container_left">
          <Link to="/" className="tiktok__navbar-logo">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="tiktok__navbar-container_center">
          <form action="search" className="search__input-form">
            <input type="text" className="search__input" />
            <span></span>
            <button className="search__input-button">
              <BiSearch />
            </button>
          </form>
        </div>
        <div className="tiktok__navbar-container_right">
          <p>Upload</p>
          <button type="button">Sign in</button>
          <BiDotsVerticalRounded />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
