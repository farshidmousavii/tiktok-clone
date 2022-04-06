import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { RiLiveLine } from "react-icons/ri";

import "./sidebar.css";
import Suggested from "./suggested/Suggested";
import Discover from "./discover/Discover";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="tiktok__sidebar">
      <div className="tiktok__sidebar-mainContainer">
        <div>
          <NavLink
            to="/"
            className={(navData) =>
              navData.isActive ? "navLink active" : "navLink"
            }
          >
            <AiFillHome />
            <h4>For You</h4>
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/following"
            className={(navData) =>
              navData.isActive ? "navLink active" : "navLink"
            }
            onClick={(prevState) => console.log(prevState)}
          >
            <BsPeople />

            <h4>Following</h4>
          </NavLink>
        </div>
        <div>
          <NavLink
            to="/live"
            className={(navData) =>
              navData.isActive ? "navLink active" : "navLink"
            }
          >
            <RiLiveLine />
            <h4>Live</h4>
          </NavLink>
        </div>
        <div></div>
        <div></div>
      </div>
      <div className="tiktok__sidebar-frameContainer">
        <p>Log in to follow creators, like videos, and view comments.</p>
        <button>Log in</button>
      </div>
      <div className="tiktok__sidebar-userContainer">
        <p>Suggested accounts</p>
        <Suggested open={open} />
        <div className="seeAllContainer">
          <p onClick={() => setOpen(!open)}>{open ? "See less" : "See all"}</p>
        </div>
      </div>
      <div className="tiktok__sidebar-discoverContainer">
        <p>Discover</p>
        <Discover />
      </div>
      <div className="tiktik__sidebar-footerContainer">
        <div className="linkContainer">
          <Link to="/">About</Link>
          <Link to="/">Newsroom</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Careers</Link>
          <Link to="/">ByteDance</Link>
        </div>
        <div className="linkContainer">
          <Link to="/">Tiktok for Good</Link>
          <Link to="/">Advertise</Link>
          <Link to="/">Developers</Link>
          <Link to="/">Transparency</Link>
          <Link to="/">Tiktok Rewards</Link>
        </div>
        <div className="linkContainer">
          <Link to="/">Help</Link>
          <Link to="/">Safety</Link>
          <Link to="/">Terms</Link>
          <Link to="/">Privacy</Link>
          <Link to="/">Creator Portal</Link>
          <Link to="/">Community Guidelines</Link>
        </div>
        <span>@ 2022 TikTok (Farshid Mousavi)</span>
      </div>
    </div>
  );
};

export default Sidebar;
