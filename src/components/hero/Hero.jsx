import React from "react";
import "../hero/Hero.css";
import heroImage from "../../assets/hero.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero_contents">
          <div className="hero_texts">
            <p>Mobile</p>
            <h3>Backover</h3>
            <h2>Tempered Glass</h2>
            <button>Shop all!</button>
          </div>
          <img src={heroImage} alt="hero product" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
