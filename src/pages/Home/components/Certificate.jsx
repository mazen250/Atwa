import React, { useEffect } from "react";
import "../styles/certificate.css";
import issa from "../../../images/issa.jpg";
import nasm from "../../../images/nasm.png";
import percison from "../../../images/percison.png";
import four from "../../../images/four.png";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const certs = [
  {
    name: "ISSA",
    desc: "Certified Nutritionist by ISSA USA ",
    link: "https://www.issaonline.com/certification/nutrition-certification",
    img: issa,
  },
  {
    name: "NASM",
    desc: "Certified Nutritionist by NASM USA ",
    link: "https://www.https://www.nasm.org/continuing-education/certified-nutrition-coach.com/certification/nutrition-certification",
    img: nasm,
  },
  {
    name: "Percision Nutrition",
    desc: "Certified Nutritionist by Percision Nutrition ",
    link: "https://www.https://www.precisionnutrition.com/nutrition-certification.com/certification/nutrition-certification",
    img: percison,
  },
  {
    name: "Fitness Mentor",
    desc: "Certified Nutritionist by Fitness Mentor ",
    link: "https://www.https://www.fitnessmentors.com/best-nutrition-certifications/.com/certification/nutrition-certification",
    img: four,
  },
];
function Certificate() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="certContainerone">
      {/* <h1>
        Fitness Manager at{" "}
        <a href="https://www.facebook.com/SoulGymEgypt" target="blank">
          Soul Gym
        </a>
      </h1> */}
      <h1>BE A BETTER YOU!</h1>
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
      <div className="certContainer">
        {certs.map((cer, index) => {
          return (
            <div
              className="singleCer"
              key={index}
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-anchor-easing="ease-in-out"
            >
              <img src={cer.img} alt="" />
              <div className="tex">
                <p>{cer.desc}</p>
                <a href={`${cer.link}`} className="button-86" target="blank">
                  More About {cer.name}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Certificate;
