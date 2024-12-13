import React from "react";
import "./footer.css";
import Logo from "../../images/SOne_index_logo.png";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <a href="#">
          <img
            className="footer-logo"
            src={Logo}
            alt=""
            width="100"
            height="30"
          />
        </a>
        <div className="footer-container">
          Copyright 2024 S-ONE. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
