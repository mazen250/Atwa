import React from "react";
import "../styles/services.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import servone from "../../../images/follow.png";
import servtwo from "../../../images/serv2.png";
import servthree from "../../../images/serv3.png";
function Services() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="serviceContianer">
      <div className="head">
        <h1>BE A BETTER YOU</h1>
        <p>
          SENIOR FITNESS MANAGER AT{" "}
          <a
            href="https://www.facebook.com/SoulGymEgypt/"
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "bold",
              borderBottom: "1px solid black",
            }}
          >
            SOUL GYM
          </a>
        </p>
        <p className="para">
          Whether you want to lose weight, tone up, gain lean muscle or you are
          happy as you are but would like a healthier lifestyle, RCotterill PT
          is the right choice for you. Everyone wants to feel comfortable in
          their own skin, therefore, even if you are working a busy schedule,
          finding it hard to meet your fitness goals or would like to get fit,
          RCotterill PT gives you the flexibility to reach your full potential
          with a variety of different online and individual personal training
          plans.
        </p>
      </div>
      <div className="servs">
        <div className="serv">
          <img src={servthree} alt="one" />
          <h1>Nutrition Plan</h1>
          <p>
            The ultimate goal is for you to enjoy your life to the fullest,
            engage in social situations confidently and take up events you
          </p>
          <button className="button-86">Join Now</button>
        </div>
        <div className="serv">
          <img src={servtwo} alt="two" />
          <h1>Workout Plan</h1>
          <p>
            If your busy professional life pushed your physical fitness to the
            backseat, there is a solution. The RCotterill PT online plans will
          </p>
          <button className="button-86">Join Now</button>
        </div>
        <div className="serv">
          <img
            src={servone}
            alt="three"
            width={50}
            style={{ marginTop: "5px" }}
          />
          <h1>Daily Follow ups</h1>
          <p>
            We don't only focus on the image in the mirror, but also how you
            feel in your skin. Achieving milestones with your body will transfer
          </p>
          <button className="button-86">Join Now</button>
        </div>
      </div>
    </div>
  );
}

export default Services;
