import React from "react";

import logo from "../../src/assets/assets_frontend/logo.svg";
import { Link, NavLink } from "react-router-dom";
import "../Styles/Navbar.css";
const Navbar = () => {
  return (
    <nav className="nav-bar">

      <Link to="/">
        <img className="image" src={logo} />
      </Link>

      
      <div className="navlink-con">


        <NavLink to="/" className="link">
          <p>HOME</p>
          
          <hr />
        </NavLink>



        <NavLink to="/doctors" className="link">
          <p>ALL DOCTORS</p>
          <hr />
        </NavLink>



        <NavLink to="/about" className="link">
          <p>ABOUT</p>
          <hr />
        </NavLink>


        <NavLink to="/contact" className="link">
          <p>CONTACT</p>
          <hr />
        </NavLink>



        <Link className="link">
          <button className="admin-button">Admin Panel</button>
        </Link>



      </div>



      <Link className="link" to="/signup">
        <button className="create-button">Create account</button>
      </Link>



    </nav>
  );
};

export default Navbar;
