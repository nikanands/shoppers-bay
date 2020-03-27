import { addItemToCart, reduceItemToCart } from "../../utils/cartUtils_redux";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_CART_HIDDEN":
      return {
        ...state,
        hidden: !state.hidden
      };

    case "ADD_ITEM":
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      };

    case "REDUCE_CART_ITEM":
      return {
        ...state,
        cartItems: reduceItemToCart(state.cartItems, action.payload)
      };

    case "REMOVE_CART_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      };

    default:
      return state;
  }
};

export default cartReducer;
