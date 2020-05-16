import { ADD_PRODUCT_TO_CART, GET_CART_TOTAL } from "../actions/types";

const initialState = {
  cartTotal: 0,
  cartTotalCost: 0,
  products: {
    greyTShirt: {
      name: "Grey T-shirt",
      price: 35.0,
      amount: 0,
      inCart: false,
    },
    blackTShirt: {
      name: "Black T-shirt",
      price: 35.0,
      amount: 0,
      inCart: false,
    },
    whiteTShirt: {
      name: "White T-shirt",
      price: 35.0,
      amount: 0,
      inCart: false,
    },
    blueTShirt: {
      name: "Blue T-shirt",
      price: 35.0,
      amount: 0,
      inCart: false,
    },
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      let addQuantity = { ...state.products[action.payload] };
      addQuantity.amount += 1;
      addQuantity.inCart = true;
      return {
        ...state,
        cartTotalCost: state.cartTotal + state.products[action.payload].price,
        products: {
          ...state.products,
          [action.payload]: addQuantity,
        },
        cartTotal: state.cartTotal + 1,
      };
    case GET_CART_TOTAL:
      return {
        ...state,
      };
    default:
      return state;
  }
};
