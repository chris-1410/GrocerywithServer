import React from "react";
import "../Styles/HomePage.css";

export const Home = () => {
  return (
    <div>
      <header>Grocery Application</header>
      <hr />
      <div>
        <nav className="displayflex">
          <a className="home-nav" href="/main">
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

      <div>
        <img
          src={
            "https://lh3.googleusercontent.com/93-6i6wCrGd0ucOtmL6BhG94gWhPnu7Jw9cEQHAxbBHRXFvXhZJ70qUhmJekU3j1AqVnl3r_NeIWUdbyXdj34T5ZmQtOUNkzn-9e=s750"
          }
        />
      </div>
    </div>
  );
};
