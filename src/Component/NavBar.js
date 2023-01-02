import React from "react";
import "../Styles/navbar.css";
import { useNavigate } from "react-router-dom";

export const NavBar = ({ size, setShow }) => {
  const navigate = useNavigate();
  function logout() {
    localStorage.clear();
    navigate("/");
    console.log("Clicked Logout !!!");
  }
  return (
    <nav>
      <div className="nav-box">
        <span className="my-shop" onClick={() => setShow(true)}>
          Grocery Store
        </span>
        <div className="cart" onClick={() => setShow(false)}>
          <span className="cart-span">
            <i className="fa-sharp fa-solid fa-cart-plus"></i>
            <span>{size}</span>
          </span>
        </div>
        <button type="button" className="btn-logout" onClick={logout}>
          Logout
        </button>
      </div>
    </nav>
  );
};
