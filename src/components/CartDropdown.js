import React from "react";

import { withRouter } from "react-router-dom";

import { connect } from "react-redux";

import CartItem from "../components/CartItem";
import Button from "../utils/Button";
import { selectCartItems } from "../redux/selectors/cartSelector";
import { toggleCartHidden } from "../redux/actions/cartActions";

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => (
  <div className="cart-dropdown__wrapper">
    <div className="cart-dropdown__items">
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <p className="cart-dropdown__msg">Your cart is empty.</p>
      )}
    </div>
    <Button
      onClick={() => {
        history.push("/checkout");
        toggleCartHidden();
      }}
    >
      Go To Checkout
    </Button>
  </div>
);

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
