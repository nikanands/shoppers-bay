import React from "react";

const CartItem = ({ item: { name, price, imageUrl, quantity } }) => {
  return (
    <div className="cart-item__wrapper">
      <img src={imageUrl} alt="item" className="cart-item__img" />
      <div className="cart-item-details__wrapper">
        <p className="cart-item-details__name">{name}</p>
        <p className="cart-item-details__price">
          {quantity} x ${price}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
