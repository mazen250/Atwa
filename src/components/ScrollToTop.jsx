import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../scroll.css";
import arrow from "../images/go-up.png";
import ScrollIntoView from "react-scroll-into-view";
const ScrollToTop = () => {
  // useEffect(()=>{
  //     onscroll(
  //         e=>{

  //         }
  //     )
  // },[])
  return (
    <div className="scroll">
      <ScrollIntoView selector="#heroContainer">
        {/* <a href="/">^</a> */}
        <h1>^</h1>
      </ScrollIntoView>
    </div>
  );
};

export default ScrollToTop;
