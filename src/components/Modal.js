import React from "react";
import PropTypes from "prop-types";
import MuiModal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const Modal = ({ children, open, onClose }) => {
  return (
    <MuiModal
      aria-labelledby="close-modal"
      aria-describedby="close-invoice-modal"
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>{children}</Fade>
    </MuiModal>
  );
};

Modal.propTypes = {
  children: PropTypes.element,
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

Modal.defaultProps = {
  open: true,
  onClose: () => {},
};

export default Modal;
