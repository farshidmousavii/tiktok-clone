import React from "react";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="bodyContainer">
        <div className="sideBarContainer">
          <Sidebar />
        </div>
        <div className="mainContainer">{children}</div>
      </div>
    </>
  );
};

export default Layout;
