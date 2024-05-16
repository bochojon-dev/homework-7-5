import React from "react";
import "../choose/Choose.css";
import rectangle from "../../assets/rectangle.png";
import icon1 from "../../assets/icon1.svg";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";

const Choose = () => {
  return (
    <div className="choose">
      <div className="container">
        <div className="choose_contents">
          <img src={rectangle} alt="rectangle" />
          <h4>Why Choose US</h4>
          <div className="wrapper">
            <div className="icon">
              <img src={icon1} alt="icon" />
              <h3>Fast Delivery</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="icon">
              <img src={icon2} alt="icon" />
              <h3>Cheap Price</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="icon">
              <img src={icon3} alt="icon" />
              <h3>Premium Quality</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
