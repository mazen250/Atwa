import React from "react";
import "../footer.css";
import gmail from "../images/email.png";
import location from "../images/location.png";
import { BsFacebook,BsInstagram,BsYoutube } from "react-icons/bs";
const width = window.innerWidth;
const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footer">
        <div className="contact">
          <h1>contact us</h1>
          <div className="mail">
            <img src={gmail} alt="" width={17} />
            <a href="mailto:mazenfayez56@gmail.com" target="blank">
              Abdelrahmanatwa@gmail.com
            </a>
          </div>
          <div className="loc">
            <img src={location} alt="" width={13} />
            <p>Cairo,Sheraton</p>
          </div>
        </div>

        <div className="soc">
          <h1>Social Media</h1>
          <div className="bottunns">
            <div className="buttonn">
              <a href="https://www.facebook.com/mazen.fayezmano" target="_blank" rel="noopener noreferrer">
                {" "}
                <BsFacebook  color="white" size={
                  width > 500 ?26 : 20
                }/>
                
              </a>
            </div>
            <div className="buttonn">
              <a href="https://www.facebook.com/mazen.fayezmano" target="_blank" rel="noopener noreferrer">
                {" "}
                <BsInstagram color="white" size={width > 500 ?26 : 20}/>
              </a>
            </div>
            <div className="buttonn">
              <a href="https://www.facebook.com/mazen.fayezmano" target="_blank" rel="noopener noreferrer">
                {" "}
                <BsYoutube color="white" size={width > 500 ?30 : 24}/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="copy">
        &copy; all copyrights reserved to <span>Abdelrahahman Atwa</span>
      </p>
    </div>
  );
};

export default Footer;
