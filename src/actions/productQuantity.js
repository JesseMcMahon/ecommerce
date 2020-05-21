import { INCREASE_QUANTITY, DECREASE_QUANTITY } from "./types";

export const productQuantity = (action, productName) => {
  return (dispatch) => {
    dispatch({
      type: action === "increase" ? INCREASE_QUANTITY : DECREASE_QUANTITY,
      payload: productName,
    });
  };
};
