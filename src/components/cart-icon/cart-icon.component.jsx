import React from "react";
import { connect } from "react-redux";
import toggleCartIcon from "../redux/cart/cart.actions";

import { ReactComponent as ShoppingBagIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = ({toggleCartIcon}) => (
  <div className="cart-icon" onClick={toggleCartIcon}>
    <ShoppingBagIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartIcon: () => {
      dispatch(toggleCartIcon());
    },
  };
};

export default connect(null,mapDispatchToProps)(CartIcon);
