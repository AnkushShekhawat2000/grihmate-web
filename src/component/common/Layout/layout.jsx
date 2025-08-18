import React from "react";
import Header from "../Header";
import "./style.css"
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="page-container">
        {children}
      </div>
      <Footer/>
    </>
  );
};

export default Layout;
