import React from "react";
import "../shop/Shop.css";
import phone from "../../assets/phone.png";
import square from "../../assets/square.png";

const Shop = () => {
  return (
    <div className="shop">
      <div className="container">
        <div className="shop_contents">
          <div className="shop_texts">
            <h3>Shop Premium Tempered Glass in wholesale Price !</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. 
              <br />
              <br />
              LKR : 299
            </p>
            <button>Shop Tempered Glass </button>
          </div>
          <img src={phone} alt="phone" />
        </div>
      </div>
      <img className="square" src={square} alt="square" />
    </div>
  );
};

export default Shop;
