import React from "react";
import "../products/Products.css";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
import card4 from "../../assets/card4.png";

const Products = ({ data }) => {
  const products = data?.map((e) => (
    <div className="card">
      <div className="image">
        <button>sale !</button>
        <img src={e.images[0]} alt="product" />
      </div>
      <p>{e.title}</p>
      <p>LKR 799</p>
    </div>
  ));
  return (
    <div className="products">
      <div className="container">
        <div className="product_contents">
          <div className="card">
            <div className="image">
              <button>sale !</button>
              <img src={card1} alt="product" />
            </div>
            <p>iPhone 13 Pro - Transparent</p>
            <p>LKR 499</p>
          </div>
          <div className="card">
            <div className="image">
              <button>sale !</button>
              <img src={card2} alt="product" />
            </div>
            <p>Samsung S23+ - Transparent</p>
            <p>LKR 799</p>
          </div>
          <div className="card">
            <div className="image">
              <button>sale !</button>
              <img src={card3} alt="product" />
            </div>
            <p>iPhone 14 - Transparent with magsafe</p>
            <p>LKR 799</p>
          </div>
          <div className="card">
            <div className="image">
              <button>sale !</button>
              <img src={card4} alt="product" />
            </div>
            <p>Pixel 7 Pro - Transparent Wireless</p>
            <p>LKR 599</p>
          </div>
          {products}
        </div>
      </div>
    </div>
  );
};

export default Products;
