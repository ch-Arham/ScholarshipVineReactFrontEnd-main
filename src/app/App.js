import React, { useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import "../assets/scss/Theme.scss";
import Signup from "../pages/Signup";
import ContactUs from "../pages/ContactUs";
import ForgotPassword from "../pages/ForgotPassword";
import Payment from "../pages/Payment";

const App = () => {
  return (
    <div className="landing">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/forgotpassword" element={<ForgotPassword /> } />
          <Route path="/payment" element={<Payment /> } />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
