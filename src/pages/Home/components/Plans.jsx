import React, { useEffect } from "react";
import "../styles/plans.css";
import AOS from "aos";
import "aos/dist/aos.css";

// import pone from "../../../images/p1.jpg";
const Plans = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="plansContainer" id="packages">
      <h1>Packages Available</h1>
      <div
        className="plans"
        // data-aos="fade-left"
        // data-aos-duration="2000"
        // // data-aos-delay="2000"
        // data-aos-anchor-easing="ease-in-out"
      >
        <div
          className="plan"
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-anchor-easing="ease-in-out"
        >
          <div className="txt">
            <h1>Home workout</h1>
            <p>3 Months plan.</p>
          </div>
          <div className="price">
            <h3>Price : 500EGP/month</h3>
          </div>
          <p className="t">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perferendis corporis porro reprehenderit ullam, modi repellat itaque
            magni dolores ratione in molestias qui officiis beatae dolorem
            excepturi hic quos vel nemo.
          </p>
          <div className="butts">
            <button className="bt">JOIN NOW</button>
          </div>
        </div>
        <div
          className="plan"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-anchor-easing="ease-in-out"
        >
          <div className="txt">
            <h1>Home workout</h1>
            <p>3 Months plan.</p>
          </div>
          <div className="price">
            <h3>Price : 500EGP/month</h3>
          </div>
          <p className="t">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perferendis corporis porro reprehenderit ullam, modi repellat itaque
            magni dolores ratione in molestias qui officiis beatae dolorem
            excepturi hic quos vel nemo.
          </p>
          <div className="butts">
            <button className="bt">JOIN NOW</button>
          </div>
        </div>
        <div
          className="plan"
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-anchor-easing="ease-in-out"
        >
          <div className="txt">
            <h1>Home workout</h1>
            <p>3 Months plan.</p>
          </div>
          <div className="price">
            <h3>Price : 500EGP/month</h3>
          </div>
          <p className="t">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perferendis corporis porro reprehenderit ullam, modi repellat itaque
            magni dolores ratione in molestias qui officiis beatae dolorem
            excepturi hic quos vel nemo.
          </p>
          <div className="butts">
            <button className="bt">JOIN NOW</button>
          </div>
        </div>
        <div
          className="plan"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-anchor-easing="ease-in-out"
        >
          <div className="txt">
            <h1>Home workout</h1>
            <p>3 Months plan.</p>
          </div>
          <div className="price">
            <h3>Price : 500EGP/month</h3>
          </div>
          <p className="t">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Perferendis corporis porro reprehenderit ullam, modi repellat itaque
            magni dolores ratione in molestias qui officiis beatae dolorem
            excepturi hic quos vel nemo.
          </p>
          <div className="butts">
            <button className="bt">JOIN NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
