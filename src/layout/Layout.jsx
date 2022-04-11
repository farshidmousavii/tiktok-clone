import React from "react";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="bodyContainer">
        <div className="navSide-Wrapper">
          {/* when position fixed in flex , flex was destroyed , so use this wrapper and inside it can positin is fixed */}
          <div className="sideBarContainer">
            <Sidebar />
          </div>
        </div>
        <div className="mainContainer">{children}</div>
      </div>
    </>
  );
};

export default Layout;
