import React from "react";
import { connect } from "react-redux";
import { toggleCartIcon } from "../redux/cart/cart.actions";

import { selectCartItemsCount} from "../redux/cart/cart.selectors";

import { ReactComponent as ShoppingBagIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCartIcon,itemCount }) => (
  <div className="cart-icon" onClick={toggleCartIcon}>
    <ShoppingBagIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProps = (state) => {
  return {
    itemCount: selectCartItemsCount(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartIcon: () => {
      dispatch(toggleCartIcon());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
