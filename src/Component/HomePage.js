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

// import React from "react";
// import "../Styles/HomePage.css";

// export const Home = () => {
//   return (
//     <div>
//       <header>Grocery Application</header>
//       <hr />
//       <div>
//         <nav className="displayflex">
//           <a className="home-nav" href="/main">
//             Home
//           </a>

//           <div className="signup-login">
//             <a className="signin-nav" href="/admin">
//               Admin
//             </a>

//             <a className="login-nav" href="/userLogin">
//               Customer
//             </a>
//           </div>
//         </nav>
//       </div>

//       {/* <div>
//         <img
//           src={
//             "https://lh3.googleusercontent.com/93-6i6wCrGd0ucOtmL6BhG94gWhPnu7Jw9cEQHAxbBHRXFvXhZJ70qUhmJekU3j1AqVnl3r_NeIWUdbyXdj34T5ZmQtOUNkzn-9e=s750"
//           }
//         />
//       </div> */}
//     </div>
//   );
// };
