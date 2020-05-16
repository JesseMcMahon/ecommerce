import React, { Fragment } from "react";
import { connect } from "react-redux";
import { productQuantity } from "../../actions/productQuantity";
import greyTshirt from "../../images/greyTshirt.jpg";
import blackTshirt from "../../images/blackTshirt.jpg";
import whiteTshirt from "../../images/whiteTshirt.jpg";
import blueTshirt from "../../images/blueTshirt.jpg";

const Cart = ({ cartProps, productQuantity }) => {
  let itemsInCart = [];

  Object.keys(cartProps.products).forEach(function (item) {
    if (cartProps.products[item].inCart) {
      itemsInCart.push(cartProps.products[item]);
    }
  });

  const productImages = (product) => {
    if (product.tagName === "greyTshirt") {
      return greyTshirt;
    } else if (product.tagName === "blackTshirt") {
      return blackTshirt;
    } else if (product.tagName === "whiteTshirt") {
      return whiteTshirt;
    } else if (product.tagName === "blueTshirt") {
      return blueTshirt;
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
      <div className="product-header">
        <h5 className="product-title">PRODUCT</h5>
        <h5 className="price sm-hide">PRICE</h5>
        <h5 className="quantity">QUANTITY</h5>
        <h5 className="total">TOTAL</h5>
      </div>
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
