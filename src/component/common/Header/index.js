import React from "react";
import { Link } from "react-router-dom";
import headerLogo from "../../../assets/headerLogo.png"
import loginIcon from "../../../assets/loginIcon.png"
import plusIcon from "../../../assets/plusIcon.png"
import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="navbar">
        <div className="logo-section">
          <img src={headerLogo} alt="Logo" className="logo" />
        </div>

        <nav className="links">
          <Link to="/">
            <p className="link">Home</p>
          </Link>
          <Link to="/rent">
            <p className="link">Rent</p>
          </Link>
          <Link to="/sale">
            <p className="link">Sale</p>
          </Link>
          <Link to="/about">
            <p className="link">About us</p>
          </Link>
          <Link to="/contact">
            <p className="link">Contact us</p>
          </Link>
        </nav>

        <div className="actions">
          <button className="login-btn">
            <img src={loginIcon} alt="login" /> Login
          </button>
          <button className="list-btn">
            <img src={plusIcon} alt="plus" /> List Property
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
