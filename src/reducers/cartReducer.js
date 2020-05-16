import {
  ADD_PRODUCT_TO_CART,
  GET_CART_TOTAL,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "../actions/types";

const initialState = {
  cartTotal: 0,
  cartTotalCost: 0,
  products: {
    greyTshirt: {
      name: "Grey T-shirt",
      tagName: "greyTshirt",
      price: 35,
      amount: 0,
      inCart: false,
    },
    blackTshirt: {
      name: "Black T-shirt",
      tagName: "blackTshirt",
      price: 35,
      amount: 0,
      inCart: false,
    },
    whiteTshirt: {
      name: "White T-shirt",
      tagName: "whiteTshirt",
      price: 35,
      amount: 0,
      inCart: false,
    },
    blueTshirt: {
      name: "Blue T-shirt",
      tagName: "blueTshirt",
      price: 35,
      amount: 0,
      inCart: false,
    },
  },
};

export default (state = initialState, action) => {
  let productSelected = {};
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      productSelected = { ...state.products[action.payload] };
      productSelected.amount += 1;
      productSelected.inCart = true;

      return {
        ...state,
        cartTotal: state.cartTotal + 1,
        cartTotalCost:
          state.cartTotalCost + state.products[action.payload].price,
        products: {
          ...state.products,
          [action.payload]: productSelected,
        },
      };
    case GET_CART_TOTAL:
      return {
        ...state,
      };
    case INCREASE_QUANTITY:
      productSelected = { ...state.products[action.payload] };
      productSelected.amount += 1;
      return {
        ...state,
        cartTotalCost:
          state.cartTotalCost + state.products[action.payload].price,
        products: {
          ...state.proucts,
          [action.payload]: productSelected,
        },
      };
    case DECREASE_QUANTITY:
      productSelected = { ...state.products[action.payload] };
      let newCartCost = 0;
      if (productSelected.amount === 0) {
        productSelected.amount = 0;
        newCartCost = state.cartTotalCost;
      } else {
        productSelected.amount -= 1;
        newCartCost =
          state.cartTotalCost - state.products[action.payload].price;
      }

      return {
        ...state,
        cartTotalCost: newCartCost,
        products: {
          ...state.proucts,
          [action.payload]: productSelected,
        },
      };
    default:
      return state;
  }
};
