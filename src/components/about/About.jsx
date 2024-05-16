import React from "react";
import "../about/About.css";
import rectangle from "../../assets/rectangle.png";
import accessories from "../../assets/accessories.png";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about_contents">
          <img src={rectangle} alt="rectangle" />
          <h4>about us</h4>
          <h3>
            If you’re looking for a Premium Quality Tempered Glass or Back-cover
            for your Device{" "}
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. 
          </p>
          <img src={accessories} alt="accessories" />
        </div>
      </div>
    </div>
  );
};

export default About;
