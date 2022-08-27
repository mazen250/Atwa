import React from "react";
import Hero from "./components/Hero";
import "../Home/styles/home.css";
import Certificate from "./components/Certificate";
import Services from "./components/Services";
import Transformation from "./components/Transformation";
import Plans from "./components/Plans";
import Social from "./components/Social";
function Home() {
  return (
    <div className="homeContainer">
      <Hero />

      <Certificate />
      <Transformation />

      {/* <Services /> */}
      <Plans />
      <Social />
    </div>
  );
}

export default Home;
