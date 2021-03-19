import React from "react";
import PropTypes from "prop-types";
import MuiSnackbar from "@material-ui/core/Snackbar";
import Alert from "./Alert";

const Snackbar = (props) => {
  const { alert, onClose, duration } = props;
  console.log(alert);
  return (
    <MuiSnackbar
      open={alert.open}
      autoHideDuration={duration}
      onClose={onClose}
      {...props}
    >
      <Alert onClose={onClose} severity={alert.severity}>
        {alert.message}
      </Alert>
    </MuiSnackbar>
  );
};

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
  duration: 6000,
};

export default Snackbar;
