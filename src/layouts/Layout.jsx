import React from "react";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import styles from "./layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.tiktok__navbar}>
        <div className={styles.tiktok__navbar_container}>
          <Navbar />
        </div>
      </div>
      <div className={styles.bodyContainer}>
        <div className={styles.navSide_Wrapper}>
          {/* when position fixed in flex , flex was destroyed , so use this wrapper and inside it can positin is fixed */}
          <div className={styles.sideBarContainer}>
            <Sidebar />
          </div>
        </div>
        <div className={styles.mainContainer}>{children}</div>
      </div>
    </>
  );
};

export default Layout;
