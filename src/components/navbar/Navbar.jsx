import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/tiktok_logo.svg";
import { BiSearch } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { GrLanguage } from "react-icons/gr";
import { BiHelpCircle } from "react-icons/bi";
import { CgKeyboard } from "react-icons/cg";

import "./navbar.css";
const Navbar = () => {
  const [formStyle, setFormStyle] = useState(null);
  const [menu, setMenu] = useState(false);
  const focusHandler = () => {
    setFormStyle({ border: "1px solid rgba(22, 24, 35, 0.12)" });
  };
  const blurHandler = () => {
    setFormStyle(null);
  };

  return (
    <>
      <div className="tiktok__navbar-container_left">
        <Link to="/" className="tiktok__navbar-logo">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="tiktok__navbar-container_center">
        <form action="search" className="search__input-form" style={formStyle}>
          <input
            type="text"
            placeholder="Search accounts and videos"
            className="search__input"
            onFocus={focusHandler}
            onBlur={blurHandler}
          />
          <span></span>
          <button className="search__input-button">
            <BiSearch className="search__icon" />
          </button>
        </form>
      </div>
      <div className="tiktok__navbar-container_right">
        <Link to="/upload">Upload</Link>
        <button type="button">Log in</button>
        <div className="tiktok__navbar-container_right-iconWrapper">
          <BsThreeDotsVertical
            onMouseOver={() => setMenu(true)}
            onClick={() => setMenu(!menu)}
          />
          {menu && (
            <div
              className="tiktok__navbar-menu shadow-drop-2-center"
              onMouseLeave={() => setMenu(false)}
            >
              <ul>
                <li>
                  <div className="tiktok__language">
                    <GrLanguage />
                    <span>English</span>
                  </div>
                </li>
                <li>
                  <Link to="/feedback">
                    <BiHelpCircle />
                    <span>Feedback and help</span>
                  </Link>
                </li>
                <li>
                  <div className="tiktok__keyboard-shourtcut">
                    <CgKeyboard />
                    <span>Keyboard shortcuts</span>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
