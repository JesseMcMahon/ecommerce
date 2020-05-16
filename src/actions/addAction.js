import { ADD_PRODUCT_TO_CART } from "./types";
import { bindActionCreators } from "redux";

const addToCart = (productName) => {
  return (dispatch) => {
    console.log("Product: ", productName);
    dispatch({
      type: ADD_PRODUCT_TO_CART,
      payload: productName,
    });
  };
};

export default addToCart;
