import React from "react";
import "../footer.css";
import gmail from "../images/email.png";
import location from "../images/location.png";
const Footer = () => {
  return (
    <div className="footerContainer">
      {/* <div className="footer">
        <div className="left">
          <h1>WORKING HOURS </h1>
          <div className="hours">
            <p>Sunday-Thursday 10 AM - 8 PM</p>
            <p>Friday-Saturday 12 PM - 8 PM</p>
          </div>
        </div>
        <div className="right">
          <h1>ADDRESS</h1>
          <div className="hourss">
            <p>SOUL GYM -Sheraton heliopolis</p>
            <p>12 Ahmed zaki st.</p>
          </div>
        </div>
      </div>
      <p>&copy; 2022 ABDELRAHMAN ATWA</p> */}
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
              <a href="https://www.facebook.com/mazen.fayezmano">
                {" "}
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
            <div className="buttonn">
              <a href="https://www.facebook.com/mazen.fayezmano">
                {" "}
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <div className="buttonn">
              <a href="https://www.facebook.com/mazen.fayezmano">
                {" "}
                <i className="fab fa-youtube"></i>
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
