import React from "react";
import "./header.css";
import Logo from "../../images/SOne_index_logo.png";
import ThaiFlag from "../../images/SOne_index_iconthai.jpg";
import UsaFlag from "../../images/SOne_index_iconeng2.jpg";
import SearchIcon from "../../images/SOne_index_btsearch.jpg";
import YoutubeIcon from "../../images/SOne_index_menu02.png";
import PlayIcon from "../../images/SOne_index_menu01.png";
import Facebook from "../../images/SOne_index_btfacebook.png";
import Twitter from "../../images/SOne_index_bttwitter.png";
import Youtube from "../../images/SOne_index_btyoutube.png";

const Header = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid">
          {/* Logo */}
          <a className="navbar-brand">
            <img src={Logo} alt="Logo" />
          </a>
          {/* Form */}
          <div className="navbar-form">
            <div className="flag">
              <img src={ThaiFlag} alt="Thai Flag" />
              <img src={UsaFlag} alt="USA Flag" />
            </div>
            <form className="d-flex" role="search">
              <input
                className="form-control"
                type="search"
                placeholder="Search..."
                aria-label="Search"
              />
              <a href="#" className="search-icon">
                <img src={SearchIcon} alt="Search Icon" />
              </a>
            </form>
            <div className="d-flex nav-text-link">
              <a className="nav-link mx-2 small-text" href="#about">
                About S-ONE
              </a>
              <span className="mx-2 small-text">|</span>
              <a className="nav-link mx-2 small-text" href="#jobs">
                Job Opportunity
              </a>
              <span className="mx-2 small-text">|</span>
              <a className="nav-link mx-2 small-text" href="#contact">
                Contact Us
              </a>
              <span className="mx-2 small-text">|</span>
              <a className="nav-link mx-2 small-text" href="#sitemap">
                Site Map
              </a>
            </div>
          </div>
        </div>
        {/* Social Media */}
        <div className="social-tab">
          <div className="social-left">
            <a href="#">
              <img
                src={YoutubeIcon}
                alt="Youtube Icon"
                width="24"
                height="24"
                className="d-inline-block align-text-top"
              />
              Product & Service
            </a>
            <a href="#">
              <img
                src={PlayIcon}
                alt="Youtube Icon"
                width="24"
                height="24"
                className="d-inline-block align-text-top"
              />
              Promotion
            </a>
            <a href="#">
              <img
                src={PlayIcon}
                alt="Youtube Icon"
                width="24"
                height="24"
                className="d-inline-block align-text-top"
              />
              News & Events
            </a>
            <a href="#">
              <img
                src={PlayIcon}
                alt="Youtube Icon"
                width="24"
                height="24"
                className="d-inline-block align-text-top"
              />
              Safety Tips
            </a>
            <a href="#">
              <img
                src={PlayIcon}
                alt="Youtube Icon"
                width="24"
                height="24"
                className="d-inline-block align-text-top"
              />
              FAQS
            </a>
            <a href="#">
              <img
                src={PlayIcon}
                alt="Youtube Icon"
                width="24"
                height="24"
                className="d-inline-block align-text-top"
              />
              Location
            </a>
          </div>
          <div className="social-right">
            <a href="#">
              <img
                src={Facebook}
                alt="Youtube Icon"
                width="24"
                height="24"
                className="d-inline-block align-text-top"
              />
            </a>
            <a href="#">
              <img
                src={Twitter}
                alt="Youtube Icon"
                width="24"
                height="24"
                className="d-inline-block align-text-top"
              />
            </a>
            <a href="#">
              <img
                src={Youtube}
                alt="Youtube Icon"
                width="24"
                height="24"
                className="d-inline-block align-text-top"
              />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
