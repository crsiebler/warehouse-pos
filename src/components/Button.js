import React from "react";
import PropTypes from "prop-types";
import MuiButton from "@material-ui/core/Button";

const Button = ({ type, variant, color, onClick, children, ...rest }) => (
  <MuiButton
    type={type}
    variant={variant}
    color={color}
    onClick={onClick}
    {...rest}
  >
    {children}
  </MuiButton>
);

Button.propTypes = {
  type: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: "button",
  variant: "contained",
  color: "default",
  onClick: () => {},
};

export default Button;
