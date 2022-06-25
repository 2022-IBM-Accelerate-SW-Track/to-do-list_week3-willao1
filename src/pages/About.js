import React, { Component } from "react";
import "./About.css";
import billhead from "../assets/billhead.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={billhead}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Bill Ao</div>
            <div className="brief_description">
              Hello, my name is Bill Ao, and I'm from Atlanta, Georgia. 
              I am a rising junior studying Computer Science at Princeton
              University! I'm a huge sports fan, and I love to listen to 
              all genres of music. 
            </div>
          </div>
        </div>
      </div>
    );
  }
}
