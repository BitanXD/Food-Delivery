import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
const Navbar = () => {
  return (
    <div className="navbar">
      <p className="logo">Kitchen.in</p>
      
      <img className="profile" src={assets.profile_image} alt="profile image" />
    </div>
  );
};

export default Navbar;
