import React from "react";

import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";

import { selectCartItems } from "../redux/cart/cart.selectors";
import { toggleCartIcon } from "../redux/cart/cart.actions";

import CustomButton from "../custom-button/custom-button.component";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((item) => <CartItem key={item.id} item={item}></CartItem>)
      ) : (
        <span className="empty-message">Your Bag is Empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartIcon());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
