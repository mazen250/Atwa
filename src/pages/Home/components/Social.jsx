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
       <div class="social-links">
        <a href=""><i class="fab fa-facebook-f"></i></a>
        <a href=""><i class="fab fa-instagram"></i></a>
        <a href=""><i class="fab fa-twitter"></i></a>
        <a href=""><i class="fab fa-github"></i></a>
        <a href=""><i class="fab fa-linkedin-in"></i></a>
      </div>
      </div>
    </div>
  );
}

export default Social;
