import React, { useEffect } from "react";
import "../styles/hero.css";
import insta from "../../../images/instagram.png";
import facebook from "../../../images/facebook.png";
import youtube from "../../../images/youtube.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navigate, useNavigate } from "react-router-dom";

function Hero() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const navigate = useNavigate();
  return (
    <div className="heroContainer">
      <div className="div"></div>
      <div
        className="heroText"
        data-aos="fade-right"
        data-aos-duration="2000"
        data-aos-anchor-easing="ease-in-out"
      >
        <h1>
          STAY DISCIPLINE,
          <br /> STAY CONSISTENT
        </h1>
        <h3>Abdelrahman Atwa</h3>
        <p>Personal trainer & Nutritionist</p>
        {/* <button className="btn">Join Now</button> */}
        <div
          className="buttonz"
          onClick={() => {
            navigate("/register");
          }}
        >
          JOIN NOW
        </div>
      </div>
      <div className="links">
        <ul>
          <li>
            <a href="https://www.instagram.com/atwa_3/" target="blank">
              <img src={insta} alt="" width={100} className="img" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/abdrahman.atwa" target="blank">
              <img src={facebook} alt="" width={100} className="img" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/" target="blank">
              <img src={youtube} alt="" width={100} className="img" />
            </a>
          </li>
          {/* <li>
            <a href="#">
              <img src={insta} alt="" width={100} className="img" />
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default Hero;
