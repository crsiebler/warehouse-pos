import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

const OrderButton = ({ type, variant, color, onClick, children }) => (
  <Button
    type={type}
    variant={variant}
    color={color}
    className="order__controls__button"
    onClick={onClick}
  >
    {children}
  </Button>
);

OrderButton.propTypes = {
  type: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

OrderButton.defaultProps = {
  type: "submit",
  variant: "contained",
  color: "primary",
  onClick: () => {},
};

export default OrderButton;
