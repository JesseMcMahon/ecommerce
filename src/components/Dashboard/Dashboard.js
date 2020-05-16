import React, { useState } from "react";
import { connect } from "react-redux";
import addToCart from "../../actions/addAction";
import shirt from "./mock.png";
import "./dashboard.scss";

const Dashboard = (props) => {
  return (
    <div className="container">
      <div className="product">
        <img src={shirt} alt="product 1" />
        <h3>Grey T-Shirt</h3>
        <h2>$35.00</h2>
        <a
          onClick={() => props.addToCart("Gray T-Shirt")}
          className="addToCart"
          href="#"
        >
          Add to Cart
        </a>
      </div>
      <div className="product">
        <img src={shirt} alt="product 1" />
        <h3>Grey T-Shirt</h3>
        <h2>$35.00</h2>
        <a
          onClick={() => props.addToCart("Black T-Shirt")}
          className="addToCart"
          href="#"
        >
          Add to Cart
        </a>
      </div>
      <div className="product">
        <img src={shirt} alt="product 1" />
        <h3>Grey T-Shirt</h3>
        <h2>$35.00</h2>
        <a
          onClick={() => props.addToCart("White T-Shirt")}
          className="addToCart"
          href="#"
        >
          Add to Cart
        </a>
      </div>
      <div className="product">
        <img src={shirt} alt="product 1" />
        <h3>Grey T-Shirt</h3>
        <h2>$35.00</h2>
        <a
          onClick={() => props.addToCart("Blue T-Shirt")}
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
