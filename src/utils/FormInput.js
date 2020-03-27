import React from "react";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="forminput__wrapper">
    <input
      className="forminput__input"
      onChange={handleChange}
      {...otherProps}
    />
    {/* {label ? <label className="forminput__label">{label}</label> : null} */}
  </div>
);

export default FormInput;
