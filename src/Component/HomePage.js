import React from "react";
import "../Styles/HomePage.css";

export const Home = () => {
  return (
    <div>
      <header>Grocery Application</header>
      <hr />
      <div>
        <nav className="displayflex">
          <a className="home-nav" href="/">
            Home
          </a>

          <div className="signup-login">
            <a className="signin-nav" href="/admin">
              Admin
            </a>

            <a className="login-nav" href="/userLogin">
              Customer
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};
