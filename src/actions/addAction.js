import { ADD_PRODUCT_TO_CART } from "./types";

const addToCart = (productName) => {
  return (dispatch) => {
    dispatch({
      type: ADD_PRODUCT_TO_CART,
      payload: productName,
    });
  };
};

export default addToCart;
