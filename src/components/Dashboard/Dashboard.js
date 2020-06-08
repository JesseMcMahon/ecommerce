import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import addToCart from "../../actions/addAction";
import "./dashboard.scss";

const Dashboard = (props) => {
  return (
    <div className="container">
      <div className="product">
        <img
          src="https://cdn.shopify.com/s/files/1/0074/5432/6835/products/california-watch-co-hollywood-32-all-gunmetal_1800x1800.jpg?v=1588965003"
          alt="product-1"
        />
        <h3>California (Black)</h3>
        <h2>$249</h2>
        <a
          onClick={() => props.addToCart("californiaBlack")}
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
        <h2>$249</h2>
        <a
          onClick={() => props.addToCart("californiaBlue")}
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
        <h3>California (Rose)</h3>
        <h2>$249</h2>
        <a
          onClick={() => props.addToCart("californiaRoseGold")}
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
        <h3>California Gold</h3>
        <h2>$249</h2>
        <a
          onClick={() => props.addToCart("californiaGold")}
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
        <h2>$349</h2>
        <a
          onClick={() => props.addToCart("autodromo")}
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
        <h2>$199</h2>
        <a
          onClick={() => props.addToCart("xericCypher")}
          className="addToCart"
          href="#"
        >
          Add to Cart
        </a>
      </div>
      <div className="product">
        <img
          src="https://cdn.shopify.com/s/files/1/0074/5432/6835/products/xeric-evergraph-auto-gunmetal__66223.1512173711.1280.1280_1800x1800.jpg?v=1571440669"
          alt="product 1"
        />
        <h3>Evergraph</h3>
        <h2>$299</h2>
        <a
          onClick={() => props.addToCart("xericEvergraph")}
          className="addToCart"
          href="#"
        >
          Add to Cart
        </a>
      </div>
      <div className="product">
        <img
          src="https://cdn.shopify.com/s/files/1/0074/5432/6835/products/dufa-DF-9024-03__72571.1510337574.1280.1280_1800x1800.jpg?v=1571441660"
          alt="product 1"
        />
        <h3>Dufa Alto</h3>
        <h2>$650</h2>
        <a
          onClick={() => props.addToCart("dufaAlto")}
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
