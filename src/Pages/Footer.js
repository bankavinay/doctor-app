import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import "../Styles/Footer.css";
const Footer = () => {
  const { logo } = assets;
  return (
    <div className="footer-1">
      <div className="footer-2">
        <div className="footer-3">
          <img src={logo} alt="logo" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            <br />
            industry. Lorem Ipsum has been the industry's standard dummy text
            <br />
            ever since the 1500s, when an unknown printer took a galley of type
            <br />
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="footer-4">
          <h3>COMPANY</h3>
          <p>Home</p>
          <p>About us</p>
          <p>contack us</p>
          <p>Privacy policy</p>
        </div>

        <div className="footer-4">
          <h3>GET IN TOUCH</h3>
          <p>+1-212-456-7890</p>
          <p>greatstackdev@gmail.com</p>
        </div>
      </div>

      <hr />
      <div className="footer-5">
        <p>Copyright © 2024 GreatStack - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
