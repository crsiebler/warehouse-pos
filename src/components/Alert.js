import React from "react";
import PropTypes from "prop-types";
import MuiAlert from "@material-ui/lab/Alert";

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

Alert.propTpes = {
  onClose: PropTypes.func,
  severity: PropTypes.string,
  children: PropTypes.element.isRequired,
};

Alert.defaultProps = {
  onClose: () => {},
  severity: "info",
};

export default Alert;
