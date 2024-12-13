import React from "react";
import "./landing.css";
import SpecTire from "../../images/SOne_index_bg_searchtype.jpg";
import HeroPic from "../../images/SOne_index_banner.jpg";
import ButtonSearch from "../../images/SOne_index_search.png";
import ChoosePicCarousal from "../../images/SOne_index_pic01.jpg";
import DotChoosePicCarousal from "../../images/SOne_index_pic02.jpg";
import SearchMobile from "../../images/SOne_Mobile_search.png";
import ServiceTire from "../../images/SOne_index_bt-tire.jpg";
import ServiceBreak from "../../images/SOne_index_bt-break.jpg";
import ServiceBattery from "../../images/SOne_index_bt-battery.jpg";
import ServiceShockup from "../../images/SOne_index_bt-chokeup.jpg";
import ServiceOil from "../../images/SOne_index_bt-oil.jpg";
import ServiceWarranty from "../../images/SOne_index_bt-guarantee.jpg";
import BullOrange from "../../images/SOne_index_bullet1.png";
import BullBlack from "../../images/SOne_index_bullet2.png";
import TipLogo from "../../images/SOne_index_tips1.png";
import TelephonNo from "../../images/SOne_index_call.png";
import GoogleMapIcon from "../../images/SOne_index_contact_bt-googlemap.png";

const Landing = () => {
  return (
    <div className="landing">
      {/* Hero row 1 */}
      <div className="hero-row-1">
        {/* Spec tire */}
        <div className="spec-tire">
          <div className="header-search-tire">ค้นหายาง</div>
          <div className="img-spec-tire">
            {/* <img src={SpecTire} alt="Spec Tire background" /> */}
          </div>
          <div className="detail">
            {/* dropdown menu เลือกหน้ายาง */}
            <div className="search-tire-detail">
              <div className="label-title">หน้ายาง</div>
              <div className="label-subtitle">ความกว้าง (มม.)</div>
              <div className="dropdown">
                <button
                  className="btn btn-light dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  เลือกหน้ายาง{" "}
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <li>
                    <a className="dropdown-item" href="#action1">
                      -- เลือกหน้ายาง --
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* dropdown menu เลือกซีรี่ย์ */}
            <div className="search-series-detail">
              <div className="label-title">ซีรี่ย์</div>
              <div className="label-subtitle">ความสูงแก้มยาง (%)</div>
              <div className="dropdown">
                <button
                  className="btn btn-light dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  เลือกซีรี่ย์{" "}
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <li>
                    <a className="dropdown-item" href="#action1">
                      -- เลือกซีรี่ย์ --
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* dropdown menu เลือกกระทะล้อ */}
            <div className="search-max-detail">
              <div className="label-title">กระทะล้อ</div>
              <div className="label-subtitle">เส้นผ่าศูนย์กลาง (นิ้ว)</div>
              <div className="dropdown">
                <button
                  className="btn btn-light dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  เลือกกระทะล้อ{" "}
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <li>
                    <a className="dropdown-item" href="#action1">
                      -- เลือกกระทะล้อ --
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="button-search-container">
              <img src={ButtonSearch} alt="" className="button-search" />
            </div>
          </div>
        </div>
        {/* Pic */}
        <div className="hero-pic">
          <div className="header-search-tire-mobile">
            <div>ค้นหายาง</div>
            <a className="search-mobile" href="#">
              <img src={SearchMobile} alt="" />
            </a>
          </div>
          <img src={HeroPic} alt="" className="img-hero" />
          <div className="pic-carousal">
            <div>
              <img src={ChoosePicCarousal} alt="" />
            </div>
            <div className="pic-carousal-mid">
              <img src={DotChoosePicCarousal} alt="" />
            </div>
            <div>
              <img src={DotChoosePicCarousal} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* Hero row 2 */}
      <div className="service">
        <img src={ServiceTire} alt="" />
        <img src={ServiceBreak} alt="" />
        <img src={ServiceBattery} alt="" />
        <img src={ServiceShockup} alt="" />
        <img src={ServiceOil} alt="" />
        <img src={ServiceWarranty} alt="" />
      </div>
      {/* Hero row 3 */}
      <div className="hero-row-3">
        <div className="showroom">
          <div className="header-search-showroom">
            ค้นหาศูนย์บริการใกล้บ้านคุณ
          </div>
          <div className="showroom-content">
            <div className="form-showroom-search">
              <div className="province">
                <div className="head-showroom-form">จังหวัด</div>
                <div className="dropdown-province">
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      เลือกจังหวัด
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          --
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="district">
                <div className="head-showroom-form">เขต/อำเภอ</div>
                <div className="dropdown-district">
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      เลือกเขต/อำเภอ
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          --
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="road">
                <div className="head-showroom-form">ถนน</div>
                <div className="dropdown-road">
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      เลือกถนน
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          --
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="concern">
                หมายเหตุ: กรุณาเลือกอย่างใดอย่างหนึง
              </div>
            </div>
            <a className="button-search-showroom" href="#">
              <img src={ButtonSearch} alt="" />
            </a>
          </div>
        </div>
        <div className="news-event">
          <div className="head-news-container">
            <div className="head-news">News & Events</div>
            <div className="point-page-news">
              <div>
                <img src={BullOrange} alt="" />
              </div>
              <div>
                <img src={BullBlack} alt="" />
              </div>
              <div>
                <img src={BullBlack} alt="" />
              </div>
            </div>
          </div>
          <div className="card-all-news">
            {/* news 1 */}
            <div>
              <div className="card">
                <img
                  src={ChoosePicCarousal}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up.
                  </p>
                </div>
              </div>
            </div>
            {/* news 2 */}
            <div>
              <div className="card">
                <img
                  src={ChoosePicCarousal}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up.
                  </p>
                </div>
              </div>
            </div>
            {/* news 3 */}
            <div>
              <div className="card">
                <img
                  src={ChoosePicCarousal}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-orange"></div>
        </div>
        {/* contact */}
        <div className="contact">
          <div className="tip">
            <img src={TipLogo} alt="" />
          </div>
          <div className="register-receive-news">
            <div className="text-register-news">สมัครรับข่าวสาร</div>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="กรุณาใส่อีเมล"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-outline-danger"
                type="button"
                id="button-addon2"
              >
                GO
              </button>
            </div>
          </div>
          <div className="tel">
            <img className="tel-pic" src={TelephonNo} alt="" />
            <img className="googlemap" src={GoogleMapIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
