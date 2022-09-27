import React, { useState } from "react";
import "../styles/register.css";
const Register = () => {
  const [gender, setGender] = useState("");
  const [level, setLevel] = useState("");
  let levels = ["bigginer", "advanced", "athlete", "pro"];
  return (
    <div className="regsiterContainer">
      <div className="form">
        <h1>Registeration Form</h1>
        <input type="text" placeholder="Enter your Name" />
        <label>Gender</label>
        <label for="gender"> Select you gender</label>
        <select
          name="gender"
          onChange={(e) => {
            setGender(e.target.value);
          }}
        >
          <option value="none" selected>
            Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <label>Enter your age</label>
        <input type="date" />
        <input type="Number" placeholder="enter your wieght" />
        <input type="text" placeholder="enter your Phone Number" />
        <input type="mail" placeholder="Enter your email" />
        <label htmlFor="">enter your level</label>
        <input
          type="range"
          min="0"
          max="3"
          onChange={(e) => {
            setLevel(levels[Number(e.target.value)]);
          }}
        />
        {level.length > 0 && <h3>{level}</h3>}
        <textarea
          placeholder="What is your Current occupation? "
          cols="50"
          rows="10"
        />
        <label htmlFor="">do you workout?</label>
        <select name="do you work out">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <label htmlFor="">if yes kindly choose where you workout</label>
        <select name="if yes kindly choose where you workout">
          <option value="Gym">Gym</option>
          <option value="Home">Home</option>
        </select>
        <input type="text" placeholder="How mmany days you can hit the gym?" />
        <input type="text" placeholder="Do you practice any types of sports?" />
        <label htmlFor="">Do you have any kind of injuries</label>
        <select name="Do you have any kind of injuries">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <input
          type="text"
          placeholder="if yes, please state what injury you have/had"
        />
        <input
          type="text"
          placeholder="Do you have any medical condition (open heart , asthma,diabetic etc,..."
        />
        <label htmlFor="">are you on any type of medications?</label>
        <select name="Do you have any kind of injuries">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <label htmlFor="">Do you smoke</label>
        <select name="Do you have any kind of injuries">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <input type="text" placeholder="Do you have allergies?" />
        <input type="text" placeholder="Do you dislike any kind of protein?" />
        <input type="text" placeholder="Do you dislike any kind of carbs?" />
        <input type="text" placeholder="Are you lactose intolerant" />
        <input type="text" placeholder="Do you have access to supplements" />
        <textarea
          name=""
          placeholder="General Comment"
          cols="30"
          rows="10"
        ></textarea>
        <label htmlFor="">If you have, upload your inbody</label>
        <input type="file" />
      </div>
    </div>
  );
};

export default Register;
