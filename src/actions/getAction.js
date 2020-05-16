import { GET_CART_TOTAL } from "./types";

const getCartTotal = () => {
  return (dispatch) => {
    console.log("Updating cart numbers");
    dispatch({
      type: GET_CART_TOTAL,
    });
  };
};

export default getCartTotal;
