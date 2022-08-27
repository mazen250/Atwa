import React from "react";
import "../styles/social.css";
function Social() {
  return (
    <div className="socialContainer">
      <h1>Follow us on social media</h1>
      <div className="wrapper">
        <div className="buttonn">
          <div className="icon">
            <i className="fab fa-facebook-f"></i>
          </div>
          <span>
            <a href="https://www.facebook.com/mazen.fayezmano">Facebook</a>
          </span>
        </div>
        <div className="buttonn">
          <div className="icon">
            <i className="fab fa-whatsapp"></i>
          </div>
          <span>
            {" "}
            <a href="https://www.facebook.com/mazen.fayezmano">Whatsapp</a>
          </span>
        </div>
        <div className="buttonn">
          <div className="icon">
            <i className="fab fa-instagram"></i>
          </div>
          <span>
            {" "}
            <a href="https://www.facebook.com/mazen.fayezmano">Instagram</a>
          </span>
        </div>
        {/* <div class="buttonn">
          <div class="icon">
            <i class="fab fa-github"></i>
          </div>
          <span>Github</span>
        </div> */}
        <div className="buttonn">
          <div className="icon">
            <i className="fab fa-youtube"></i>
          </div>
          <span>
            {" "}
            <a href="https://www.facebook.com/mazen.fayezmano">Youtube</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Social;
