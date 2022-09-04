import React, { useEffect, useRef } from "react";
import "../contact/styles/contact.css";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";
export const Contact = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mucm4js",
        "template_0x067cq",
        form.current,
        "user_Zt6yBqD3Js14VLhocjRkD"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contactContainer">
      <div
        className="form"
        data-aos="fade-right"
        data-aos-duration="2000"
        data-aos-anchor-easing="ease-in-out"
      >
        <h3>send us a message!</h3>
        <label>Name</label>
        <input type="text" name="user_name" placeholder="enter your name" />
        <label>Email</label>
        <input type="email" name="user_email" placeholder="enter your email" />
        <label>Enter your Message</label>
        <textarea name="message" />
        <p>Note:Drop your phone if you want!</p>
        <input type="submit" value="Send" className="button" />
      </div>
    </form>
  );
};

export default Contact;
