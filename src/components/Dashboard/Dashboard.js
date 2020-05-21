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
          src="https://cdn.shopify.com/s/files/1/0074/5432/6835/products/california-watch-co-hollywood-32-all-gunmetal_1800x1800.jpg?v=1588965003"
          alt="product 1"
        />
        <h3>California (Black)</h3>
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
          src="https://cdn.shopify.com/s/files/1/0074/5432/6835/products/california-watch-co-hollywood-32-deep-blue_1800x1800.jpg?v=1588965032"
          alt="product 1"
        />
        <h3>California (Blue)</h3>
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
          src="https://cdn.shopify.com/s/files/1/0074/5432/6835/products/california-watch-co-hollywood-32-rose-gold-black_1800x1800.jpg?v=1588965007"
          alt="product 1"
        />
        <h3>California (Rose Gold)</h3>
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
          src="https://cdn.shopify.com/s/files/1/0074/5432/6835/products/california-watch-co-hollywood-32-all-gold_1800x1800.jpg?v=1588965000"
          alt="product 1"
        />
        <h3>California (Gold)</h3>
        <h2>$35.00</h2>
        <a
          onClick={() => props.addToCart("blueTshirt")}
          className="addToCart"
          href="#"
        >
          Add to Cart
        </a>
      </div>
      <div className="product">
        <img
          src="https://cdn.shopify.com/s/files/1/0074/5432/6835/products/Autodromo-GroupB-Series2-Safari_Front_1800x1800.jpg?v=1584993315"
          alt="product 1"
        />
        <h3>Autodromo</h3>
        <h2>$35.00</h2>
        <a
          onClick={() => props.addToCart("blueTshirt")}
          className="addToCart"
          href="#"
        >
          Add to Cart
        </a>
      </div>
      <div className="product">
        <img
          src="https://cdn.shopify.com/s/files/1/0074/5432/6835/products/xeric-cypher-automatic-black-yellow__18063.1559236165.1280.1280_1800x1800.jpg?v=1571443844"
          alt="product 1"
        />
        <h3>Xeric Cypher</h3>
        <h2>$35.00</h2>
        <a
          onClick={() => props.addToCart("blueTshirt")}
          className="addToCart"
          href="#"
        >
          Add to Cart
        </a>
      </div>
      <div className="product">
        <img
          src="https://cdn.shopify.com/s/files/1/0074/5432/6835/products/california-watch-co-hollywood-32-all-gold_1800x1800.jpg?v=1588965000"
          alt="product 1"
        />
        <h3>California (Gold)</h3>
        <h2>$35.00</h2>
        <a
          onClick={() => props.addToCart("blueTshirt")}
          className="addToCart"
          href="#"
        >
          Add to Cart
        </a>
      </div>
      <div className="product">
        <img
          src="https://cdn.shopify.com/s/files/1/0074/5432/6835/products/california-watch-co-hollywood-32-all-gold_1800x1800.jpg?v=1588965000"
          alt="product 1"
        />
        <h3>California (Gold)</h3>
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
