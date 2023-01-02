import React from "react";
import "../Styles/HomePage.css";
import img from "../images/HomePage.PNG";
import UserLogin from "./UserLogin";

import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  function registernavigate() {
    navigate("/RegUser");
    console.log("Navigate to Register Screen !!!");
  }
  return (
    <div className="div-home">
      <nav className="top-nav">
        <button className="btn-reg-home" onClick={registernavigate}>
          Register
        </button>
      </nav>
      <div className="div-split">
        <div className="img-div">
          <img src={img} />
        </div>
        <div className="div-login">
          <UserLogin />
        </div>
      </div>
    </div>
  );
};

