import React, { useState } from "react";
import { connect } from "react-redux";
import addToCart from "../../actions/addAction";
import shirt from "./mock.png";
import "./dashboard.scss";

const Dashboard = (props) => {
  return (
    <div className="container">
      <div className="product">
        <img
          src="https://www.clothingshoponline.com/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/1/7/17924_f_fl.jpg"
          alt="product 1"
        />
        <h3>Grey T-Shirt</h3>
        <h2>$35.00</h2>
        <a
          onClick={() => props.addToCart("greyTshirt")}
          className="addToCart"
          href="#"
        >
          Add to Cart
        </a>
      </div>
      <div className="product">
        <img
          src="https://www.clothingshoponline.com/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/1/7/17927_f_fl.jpg"
          alt="product 1"
        />
        <h3>Black T-Shirt</h3>
        <h2>$35.00</h2>
        <a
          onClick={() => props.addToCart("blackTshirt")}
          className="addToCart"
          href="#"
        >
          Add to Cart
        </a>
      </div>
      <div className="product">
        <img
          src="https://www.clothingshoponline.com/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/1/7/17904_f_fl.jpg"
          alt="product 1"
        />
        <h3>White T-Shirt</h3>
        <h2>$35.00</h2>
        <a
          onClick={() => props.addToCart("whiteTshirt")}
          className="addToCart"
          href="#"
        >
          Add to Cart
        </a>
      </div>
      <div className="product">
        <img
          src="https://www.clothingshoponline.com/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/6/6/66724_f_fl.jpg"
          alt="product 1"
        />
        <h3>Blue T-Shirt</h3>
        <h2>$35.00</h2>
        <a
          onClick={() => props.addToCart("blueTshirt")}
          className="addToCart"
          href="#"
        >
          Add to Cart
        </a>
      </div>
    </div>
  );
};

export default connect(null, { addToCart })(Dashboard);
