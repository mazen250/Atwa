import React from "react";
import "../styles/hero.css";
function Hero() {
  return (
    <div className="heroContainer">
      <div className="heroText">
        <h1>
          STAY DISCIPLINE,
          <br /> STAY CONSISTENT
        </h1>
        <h3>Abdelrahman Atwa</h3>
        <p>Personal trainer & Nutritionist</p>
        {/* <button className="btn">Join Now</button> */}
        <div class="button">JOIN NOW</div>
      </div>
    </div>
  );
}

export default Hero;
