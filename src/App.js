import React from "react";
import { Home } from "./Component/HomePage";
import NavBarMain from "./Component/NavBarMain";
import AdminView from "./Component/AdminView";
import RegisterUser from "./Component/RegisterUser";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      {/* <Home/> */}
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/User" element={<NavBarMain />} />
          <Route path="/Admin" element={<AdminView />} />
          <Route path="/RegUser" element={<RegisterUser />}/>
        </Routes>
      </Router>
    </div>
  );
}
{
  /* <Route path="/treat" element={<Products />} /> */
}
export default App;
