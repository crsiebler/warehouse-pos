import React from "react";
import { useDisplay, useDisplayDispatch } from "../context/displayContext";
import Snackbar from ".//Snackbar";

const SnackbarContainer = () => {
  const { alert } = useDisplay();
  const { hideAlert } = useDisplayDispatch();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    hideAlert();
  };

  return <Snackbar alert={alert} onClose={handleClose} />;
};

export default SnackbarContainer;
