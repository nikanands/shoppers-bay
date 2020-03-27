import React from "react";

const Button = ({ children, isGoogle, inverted, ...otherProps }) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      isGoogle ? "google_signin_btn" : ""
    } btn`}
    {...otherProps}
  >
    {children}
  </button>
);

export default Button;
