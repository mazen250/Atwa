import React from "react";
import "../footer.css";
const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footer">
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
      <p>&copy; 2022 ABDELRAHMAN ATWA</p>
    </div>
  );
};

export default Footer;
