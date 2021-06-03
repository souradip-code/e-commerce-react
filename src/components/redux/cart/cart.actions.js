import  CartActionTypes  from "./cart.types";

const toggleCartIcon = () => {
  return {
    type: CartActionTypes.CART_ICON_TOGGLE
  };
};
export default toggleCartIcon;
