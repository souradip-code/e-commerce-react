import CartActionTypes from "./cart.types";

export const toggleCartIcon = () => {
  return {
    type: CartActionTypes.CART_ICON_TOGGLE,
  };
};

export const addItem = (item) => {
  return {
    type: CartActionTypes.ADD_ITEM,
    payload: item,
  };
};

