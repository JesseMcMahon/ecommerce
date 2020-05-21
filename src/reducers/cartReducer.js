import {
  ADD_PRODUCT_TO_CART,
  GET_CART_TOTAL,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  REMOVE_PRODUCT_FROM_CART,
} from "../actions/types";

const initialState = {
  cartTotal: 0,
  cartTotalCost: 0,
  products: {
    californiaBlack: {
      name: "California (Black)",
      tagName: "californiaBlack",
      price: 249,
      amount: 0,
      inCart: false,
    },
    californiaBlue: {
      name: "California (Blue)",
      tagName: "californiaBlue",
      price: 249,
      amount: 0,
      inCart: false,
    },
    californiaGold: {
      name: "California (Gold)",
      tagName: "californiaGold",
      price: 249,
      amount: 0,
      inCart: false,
    },
    californiaRoseGold: {
      name: "California (Rose)",
      tagName: "californiaRoseGold",
      price: 249,
      amount: 0,
      inCart: false,
    },
    autodromo: {
      name: "Autodromo",
      tagName: "autodromo",
      price: 349,
      amount: 0,
      inCart: false,
    },
    xericCypher: {
      name: "Xeric Cypher",
      tagName: "xericCypher",
      price: 199,
      amount: 0,
      inCart: false,
    },
    xericEvergraph: {
      name: "Xeric Evergraph",
      tagName: "xericEvergraph",
      price: 299,
      amount: 0,
      inCart: false,
    },
    dufaAlto: {
      name: "Dufa Alto",
      tagName: "dufaAlto",
      price: 650,
      amount: 0,
      inCart: false,
    },
  },
};

export default (state = initialState, action) => {
  let productSelected = {};
  switch (action.type) {
    case REMOVE_PRODUCT_FROM_CART:
      productSelected = { ...state.products[action.payload] };
      productSelected.inCart = false;

      return {
        ...state,
      };

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
          ...state.products,
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
          ...state.products,
          [action.payload]: productSelected,
        },
      };
    default:
      return state;
  }
};
