import React from "react";
import "../styles/hero.css";
import insta from "../../../images/instagram.png";
import facebook from "../../../images/facebook.png";
import youtube from "../../../images/youtube.png";
function Hero() {
  return (
    <div className="heroContainer">
      <div className="div"></div>
      <div className="heroText">
        <h1>
          STAY DISCIPLINE,
          <br /> STAY CONSISTENT
        </h1>
        <h3>Abdelrahman Atwa</h3>
        <p>Personal trainer & Nutritionist</p>
        {/* <button className="btn">Join Now</button> */}
        <div className="buttonz">JOIN NOW</div>
      </div>
      <div className="links">
        <ul>
          <li>
            <a href="#">
              <img src={insta} alt="" width={100} className="img" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={facebook} alt="" width={100} className="img" />
            </a>
          </li>
          <li>
            <a href="#">
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
