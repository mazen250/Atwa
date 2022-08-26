import React from "react";
import "../styles/certificate.css";
import issa from "../../../images/issa.jpg";
import nasm from "../../../images/nasm.png";
import percison from "../../../images/percison.png";
import four from "../../../images/four.png";
import { Link } from "react-router-dom";
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
  return (
    <div className="certContainer">
      {certs.map((cer, index) => {
        return (
          <div className="singleCer" key={index}>
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
  );
}

export default Certificate;
