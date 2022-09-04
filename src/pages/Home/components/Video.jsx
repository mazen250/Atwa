import React, { useEffect } from "react";
import "../styles/video.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Video = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="videoContainer">
      <h2>HAVE A LOOK!</h2>
      <div className="vid">
        <div
          className="leftvid"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-anchor-easing="ease-in-out"
        >
          <h1>Title of the Video</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
            aperiam aliquid totam possimus illo voluptate nihil tenetur in
            numquam architecto tempora deserunt, dignissimos sapiente vero
            reiciendis.
          </p>
        </div>
        <div
          className="rightvid"
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-anchor-easing="ease-in-out"
        >
          {/* <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/9YffrCViTVk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe> */}
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Z63w5PefxTQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Video;
