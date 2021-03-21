import React from "react";
import PropTypes from "prop-types";
import MuiSnackbar from "@material-ui/core/Snackbar";
import Alert from "./Alert";

const Snackbar = ({ alert, onClose, duration, ...rest }) => (
  <MuiSnackbar
    open={alert.open}
    anchorOrigin={{ vertical: "top", horizontal: "right" }}
    autoHideDuration={duration}
    onClose={onClose}
    {...rest}
  >
    <Alert onClose={onClose} severity={alert.severity}>
      {alert.message}
    </Alert>
  </MuiSnackbar>
);

Snackbar.propTypes = {
  alert: PropTypes.shape({
    open: PropTypes.bool.isRequired,
    severity: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
  duration: PropTypes.number,
};

Snackbar.defaultProps = {
  alert: { open: false, severity: "info", message: "" },
  onClose: () => {},
  duration: 3000,
};

export default Snackbar;
