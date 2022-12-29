import React from "react";
import "../Styles/HomeScreen.css";
import img from "../images/HomePage.PNG";
export const HomeScreen = () => {
  return (
    <React.Fragment>
      <div className="div-home">
        <nav className="top-nav">
        <button>Home</button>
        <button>Login</button>
        <button>Register</button>
        </nav>
        <img src={img} />
      </div>
    </React.Fragment>
  );
};
