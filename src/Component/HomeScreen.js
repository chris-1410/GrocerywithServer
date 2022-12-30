import React from "react";
import "../Styles/HomeScreen.css";
import img from "../images/HomePage.PNG";

export const HomeScreen = () => {
  return (
    <React.Fragment>
      <div className="div-home">
        <nav className="top-nav">
          <button href="/main">Home</button>
          <button className="btn-login-home" href="/login">
            Login
          </button>
          <button className="btn-reg-home" href="/">
            Register
          </button>
        </nav>
        <img src={img} />
      </div>
    </React.Fragment>
  );
};

// href="/"
