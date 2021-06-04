import CartActionTypes from "./cart.types";
import {addItemToCart} from './cart.utils';


const INITIALIZE_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIALIZE_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.CART_ICON_TOGGLE:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems,action.payload)
      }

    default:
      return state;
  }
};

export default cartReducer;
