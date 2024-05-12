import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrowIcon from "../Assets/arrow.png";
import heroImage from "../Assets/hero_image.png";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New Arrivals Only</h2>
        <div>
          <div className="hero-hand-icon">
            <p>New</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>Collections</p>
          <p>For Everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrowIcon} alt="hero" />
        </div>
      </div>
      <div className="hero-right">
        <img src={heroImage} alt="" />
      </div>
    </div>
  );
};
