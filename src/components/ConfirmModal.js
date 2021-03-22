import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "./Button";
import Modal from "./Modal";

const ConfirmModal = ({ open, onClose, onConfirm }) => (
  <Modal open={open} handleClose={onClose}>
    <Grid
      container
      component="form"
      onSubmit={onConfirm}
      direction="column"
      className="modal"
      alignItems="center"
      spacing={2}
    >
      <Grid item>
        <Typography variant="h6">Are you sure?</Typography>
      </Grid>
      <Grid item container direction="row" spacing={2}>
        <Grid item xs={12} md={6}>
          <Button
            onClick={onClose}
            variant="contained"
            className="modal__button"
          >
            Cancel
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="modal__button"
            onClick={onConfirm}
          >
            Confirm
          </Button>
        </Grid>
      </Grid>
    </Grid>
  </Modal>
);

ConfirmModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

export default ConfirmModal;
