import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { RiLiveLine } from "react-icons/ri";
import badge from "../../assets/images/tiktok_ver.png";
import "./sidebar.css";
import { userContext } from "../../context/UserContex";

const Sidebar = () => {
  const users = useContext(userContext);
  const [open, setOpen] = useState(false);

  const handleSeeAll = () => {
    setOpen(!open);
  };

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
        {users.slice(0, 20).map(({ user }, index) => {
          return (
            <div
              className="userContainer"
              key={user.uid}
              style={{ display: `${open && index >= 5 ? "none" : ""}` }}
            >
              <Link to="/" className="suggest-user-avatar">
                <div>
                  <span>
                    <img src={user.avatar_thumb.url_list[0]} alt="" />
                  </span>
                </div>
              </Link>
              <Link to="/" className="suggest-user-content">
                <div className="userTitleWrapper">
                  <h4 className="user-title">{user.unique_id}</h4>
                  <div className="user-bluev">
                    {user.custom_verify === "Verified account" && (
                      <img src={badge} alt="" />
                    )}
                  </div>
                </div>
                <p className="userDesc">{user.nickname}</p>
              </Link>
            </div>
          );
        })}
        <div className="seeAllContainer">
          <p onClick={handleSeeAll}>{open ? "See less" : "See all"}</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
