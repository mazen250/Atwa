import React from "react";
import "../styles/transformation.css";
import one from "../../../transformationImages/1.jpg";
import two from "../../../transformationImages/2.jpg";
import three from "../../../transformationImages/3.jpg";
import four from "../../../transformationImages/4.jpg";
import five from "../../../transformationImages/5.jpg";
import six from "../../../transformationImages/6.jpg";
import seven from "../../../transformationImages/7.jpg";
import eight from "../../../transformationImages/8.jpg";
import nine from "../../../transformationImages/9.jpg";
import ten from "../../../transformationImages/10.jpg";
import eleven from "../../../transformationImages/11.jpg";
import twelve from "../../../transformationImages/12.jpg";
import therteen from "../../../transformationImages/13.jpg";
import fourteen from "../../../transformationImages/14.jpg";
import fifteen from "../../../transformationImages/15.jpg";

function Transformation() {
  const images = [
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
    twelve,
    therteen,
    fourteen,
    // fifteen,
  ];
  return (
    <div className="tranContainer">
      <h2 style={{ marginTop: "30px", fontWeight: "300" }}>
        some of our heros!
      </h2>
      <p>press to zoom in</p>
      <div className="images">
        {images.map((im, index) => {
          return <img src={im} alt="" key={index} />;
        })}
      </div>
      <button className="learn-more">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span className="button-text">Join Now</span>
      </button>
    </div>
  );
}

export default Transformation;
