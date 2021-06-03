import CartActionTypes from "./cart.types";


const INITIALIZE_STATE = {
  hidden: true,
};

const cartReducer = (state = INITIALIZE_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.CART_ICON_TOGGLE:
      return {
        ...state,
        hidden: !state.hidden,
      };

    default:
      return state;
  }
};

export default cartReducer;
