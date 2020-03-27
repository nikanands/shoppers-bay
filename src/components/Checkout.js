import React from "react";
import { connect } from "react-redux";

import {
  selectCartItems,
  selectCartTotal
} from "../redux/selectors/cartSelector";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "./CheckoutItem";
import StripeCheckoutButton from "./StripeCheckoutButton";

const Checkout = ({ cartItems, cartTotal }) => {
  return (
    <div className="checkout__wrapper">
      <ul className="checkout__header">
        <li className="checkout__header-item">Product</li>
        <li className="checkout__header-item">Description</li>
        <li className="checkout__header-item">Quantity</li>
        <li className="checkout__header-item">Price</li>
        <li className="checkout__header-item">Remove</li>
      </ul>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <h3 className="checkout__cart-total">Total: ${cartTotal}</h3>
      <p className="checkout__cart-total">
        <StripeCheckoutButton total={cartTotal} />
      </p>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);
