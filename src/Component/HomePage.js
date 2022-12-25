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
            <a className="signin-nav" href="">
              Admin
            </a>

            <a className="login-nav" href="">
              User
            </a>
          </div>
        </nav>
      </div>
    </div>

    // <div>
    //
    //   <hr />
    //   <div className="list-div">
    //     <ul>
    //       <li>Home</li>
    //       <li>Products</li>
    //       <li>Admin</li>
    //       <li>User</li>
    //     </ul>
    //   </div>
    //   {/* <div className="login-div">
    //     <button className="btn-admin">Admin</button>
    //     <button className="btn-user">User</button>
    //   </div> */}
    // </div>
  );
};
