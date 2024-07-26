import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import { CiUser } from "react-icons/ci";
export default function Footer() {
  return (
    <div id="footer" className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={logo} alt="" height="150px" width="170" />
          <p>
            Desarolladora con 2 años de experiencia en busqueda de nuevos
            desafios.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <CiUser className="CiUser" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe"> Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          &#169; 2024 Gisela Cittadini. All rights reserved.
        </p>
        <div className="footer-bottom-rights">
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
}
