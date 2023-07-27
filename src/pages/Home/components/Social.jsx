import React, { useEffect } from "react";
import "../styles/social.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsFacebook,BsInstagram,BsYoutube } from "react-icons/bs";
function Social() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="socialContainer">
      <h1>Follow us on social media</h1>
      <div
        className="wrapper"
        // data-aos="fade-up"
        // data-aos-duration="2000"
        // data-aos-anchor-easing="ease-in-out"
      >
        <div className="buttonn">
          <div className="icon">
          <BsFacebook color="white" size={26}/>
          </div>
          <span>
            <a href="https://www.facebook.com/abdrahman.atwa" target="blank">
             
              Facebook
            </a>
          </span>
        </div>
        {/* <div className="buttonn">
          <div className="icon">
            <i className="fab fa-whatsapp"></i>
          </div>
          <span>
            {" "}
            <a href="https://www.facebook.com/mazen.fayezmano">Whatsapp</a>
          </span>
        </div> */}
        <div className="buttonn">
          <div className="icon">
            <BsInstagram color="white" size={26}/>
          </div>
          <span>
            <a href="https://www.instagram.com/atwa_3/" target="blank">
              Instagram
            </a>
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
            <BsYoutube color="white" size={30}/>
          </div>
          <span>
            <a href="https://www.youtube.com/" target="blank">
              Youtube
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Social;
