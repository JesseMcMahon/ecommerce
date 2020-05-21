import { REMOVE_PRODUCT_FROM_CART } from "./types";

const removeFromCart = (productName) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_PRODUCT_FROM_CART,
      payload: productName,
    });
  };
};

export default removeFromCart;
