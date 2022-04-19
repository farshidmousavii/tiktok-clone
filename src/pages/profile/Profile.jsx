import React from "react";
import { useLocation } from "react-router-dom";
import badge from "../../assets/images/tiktok_ver.png";
import useUserInfo from "../../hooks/userInfo/useUserInfo";
import styles from "./profile.module.css";

const Profile = () => {
  const location = useLocation();
  const id = location.state.id;
  const { userInfo, follower, following, videos, likes } = useUserInfo(id);
  const renderProfile = () => {
    return (
      <div className={styles.profileWrapper}>
        <div className={styles.userLayoutHeader}>
          <div className={styles.userInfo}>
            <div className={styles.avatarContainer}>
              <span>
                <img
                  src={
                    userInfo.avatar_168x168.url_list[
                      Math.floor(
                        Math.random() * userInfo.avatar_168x168.url_list.length
                      )
                    ]
                  }
                  alt={userInfo.unique_id}
                />
              </span>
            </div>
            <div className={styles.titleContainer}>
              <h2>
                {userInfo.unique_id}
                {userInfo.custom_verify === "Verified account" && (
                  <img src={badge} alt="" />
                )}
              </h2>
              <h1>{userInfo.nickname}</h1>
              <div className={styles.followContainer}>
                <div className={styles.followWrapper}>
                  <button> Follow</button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.countInfos}>
            <div>
              <strong>{following}</strong>
              <span>Following</span>
            </div>
            <div>
              <strong>{follower}</strong>
              <span>Followers</span>
            </div>
            <div>
              <strong>{likes}</strong>
              <span>Likes</span>
            </div>
          </div>
        </div>
        <div className="userLayoutIemContainer"></div>
      </div>
    );
  };
  return (
    <>
      {userInfo && renderProfile()}
      {!userInfo && <h1>Loading</h1>}
    </>
  );
};

export default Profile;
