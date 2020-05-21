import React, { Fragment } from "react";
import { connect } from "react-redux";
import { productQuantity } from "../../actions/productQuantity";
import californiaBlack from "../../images/californiaBlack.jpg";
import californiaBlue from "../../images/californiaBlue.jpg";
import californiaGold from "../../images/californiaGold.jpg";
import californiaRoseGold from "../../images/californiaRoseGold.jpg";
import autodroma from "../../images/autodroma.jpg";
import dufo from "../../images/watchDufo.jpg";
import xericCypher from "../../images/xericCypher.jpg";
import xericEvergraph from "../../images/xericEvergraph.jpg";

const Cart = ({ cartProps, productQuantity }) => {
  let itemsInCart = [];

  Object.keys(cartProps.products).forEach(function (item) {
    if (cartProps.products[item].inCart) {
      itemsInCart.push(cartProps.products[item]);
    }
  });

  const productImages = (product) => {
    if (product.tagName === "californiaBlack") {
      return californiaBlack;
    } else if (product.tagName === "californiaBlue") {
      return californiaBlue;
    } else if (product.tagName === "californiaGold") {
      return californiaGold;
    } else if (product.tagName === "californiaRoseGold") {
      return californiaRoseGold;
    } else if (product.tagName === "autodromo") {
      return autodroma;
    } else if (product.tagName === "dufaAlto") {
      return dufo;
    } else if (product.tagName === "xericCypher") {
      return xericCypher;
    } else if (product.tagName === "xericEvergraph") {
      return xericEvergraph;
    }
  };

  itemsInCart = itemsInCart.map((item, index) => {
    return (
      <Fragment key={index}>
        <div className="cart-product">
          <ion-icon name="close-circle"></ion-icon>
          <img src={productImages(item)} alt="shirt" />
          <span className="sm-hide">{item.name}</span>
        </div>
        <div className="price sm-hide">${item.price}.00</div>
        <div className="quantity">
          <ion-icon
            onClick={() => productQuantity("decrease", item.tagName)}
            className="decrease"
            name="arrow-back-circle-outline"
          ></ion-icon>
          <span>{item.amount}</span>
          <ion-icon
            onClick={() => productQuantity("increase", item.tagName)}
            className="increase"
            name="arrow-forward-circle-outline"
          ></ion-icon>
        </div>
        <div className="total">${item.amount * item.price}.00</div>
      </Fragment>
    );
  });

  return (
    <div className="container-products">
      <div className="products">{itemsInCart}</div>
      <div className="cart-total-container">
        <h4 className="cart-total-title">Cart Total: </h4>
        <h4 className="cart-total">${cartProps.cartTotalCost}.00</h4>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartProps: state.cartState,
});

export default connect(mapStateToProps, { productQuantity })(Cart);
