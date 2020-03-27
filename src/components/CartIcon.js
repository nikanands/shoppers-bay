import React from "react";
import { connect } from "react-redux";

import { ReactComponent as Icon } from "../assets/cartIcon.svg";
import { toggleCartHidden } from "../redux/actions/cartActions";
import { selectCartItemsCount } from "../redux/selectors/cartSelector";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cartIcon__wrapper" onClick={toggleCartHidden}>
    <Icon className="cartIcon__icon" />
    <span className="cartIcon__count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
