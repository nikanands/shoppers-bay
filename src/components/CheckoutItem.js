import React from "react";

import { connect } from "react-redux";

import { removeItem, addItem, reduceItem } from "../redux/actions/cartActions";

const CheckoutItem = ({ cartItem, removeItem, addItem, reduceItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  return (
    <div className="checkoutItem__wrapper">
      <img src={imageUrl} alt="Product" className="checkoutItem__img" />
      <p className="checkoutItem__name">{name}</p>
      <div className="checkoutItem__quantity">
        <div
          className="checkoutItem__quantity-arrow"
          onClick={() => reduceItem(cartItem)}
        >
          &#10094;
        </div>
        <p className="checkoutItem__quantity-value">{quantity}</p>
        <div
          className="checkoutItem__quantity-arrow"
          onClick={() => addItem(cartItem)}
        >
          &#10095;
        </div>
      </div>
      <p className="checkoutItem__price">{price}</p>
      <p className="checkoutItem__remove" onClick={() => removeItem(cartItem)}>
        &#10005;
      </p>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
  addItem: item => dispatch(addItem(item)),
  reduceItem: item => dispatch(reduceItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
