import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../../context/UserContex";
import { Link } from "react-router-dom";
import badge from "../../../assets/images/tiktok_ver.png";
import "./suggested.css";
import SkeletonSuggested from "../../../skeletons/SkeletonSuggested";
const Suggested = ({ open }) => {
  const users = useContext(userContext);

  const renderUsers = () => {
    return users.slice(0, 20).map(({ user }, index) => {
      return (
        <div
          className="userContainer"
          key={user.uid}
          style={{ display: `${!open && index >= 5 ? "none" : ""}` }}
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
    });
  };

  return (
    <>
      {users && renderUsers()}
      {!users &&
        [1, 2, 3, 4, 5].map((n) => {
          return <SkeletonSuggested key={n} />;
        })}
    </>
  );
};

export default Suggested;
