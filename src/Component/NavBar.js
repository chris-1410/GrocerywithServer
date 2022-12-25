import React from "react";
import "../Styles/navbar.css";

export const NavBar = ({size, setShow}) => {
  return (
    <nav>
      <div className="nav-box">
        <span className="my-shop" onClick={()=>setShow(true)}>
          Grocery Store
        </span>
        <div className="cart" onClick={()=>setShow(false)}>
          <span>
            <i className="fa-sharp fa-solid fa-cart-plus"></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};
