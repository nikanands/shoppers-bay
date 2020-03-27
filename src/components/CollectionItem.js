import React from "react";
import { connect } from "react-redux";

import Button from "../utils/Button";
import { addItem } from "../redux/actions/cartActions";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item__wrapper">
      <div
        className="collection-item__image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="collection-item__footer">
        <span className="collection-item__footer-name">{name}</span>
        <span className="collection-item__footer-price">{price}</span>
      </div>
      <Button inverted onClick={() => addItem(item)}>
        Add to cart
      </Button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
