import React from "react";

import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";

import CartItem from '../cart-item/cart-item.component';

import { selectCartItems} from "../redux/cart/cart.selectors"

import CustomButton from "../custom-button/custom-button.component";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item}></CartItem>
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
