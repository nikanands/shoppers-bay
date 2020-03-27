import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../utils/Firebase";
import CartIcon from "./CartIcon";
import CartDropdown from "./CartDropdown";
import { selectCurrentUser } from "../redux/selectors/userSelector";
import { selectCartHidden } from "../redux/selectors/cartSelector";

const Navigation = ({ currentUser, hidden }) => {
  return (
    <>
      <ul className="list">
        <li className="list-item">
          <NavLink to="/shop">{"Shop".toUpperCase()}</NavLink>
        </li>
        <li className="list-item">
          <NavLink to="/contact">{"Contact".toUpperCase()}</NavLink>
        </li>
        <li className="list-item">
          {currentUser ? (
            <div style={{ cursor: "pointer" }} onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
          ) : (
            <NavLink to="/login">{"Sign In".toUpperCase()}</NavLink>
          )}
        </li>
        <li className="list-item">
          <CartIcon />
        </li>
      </ul>
      {hidden ? null : <CartDropdown />}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Navigation);
