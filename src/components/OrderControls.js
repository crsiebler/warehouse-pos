import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

const OrderControls = () => {
  return (
    <Box display="flex" flexDirection="column" className="order__controls">
      <Box p={0.5}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="order__controls__button"
        >
          Calculate
        </Button>
      </Box>
      <Box p={0.5} flexGrow={1}>
        <Button
          type="print"
          variant="contained"
          color="primary"
          className="order__controls__button"
        >
          Print
        </Button>
      </Box>
      <Box p={0.5}>
        <Button
          type="clear"
          variant="contained"
          color="secondary"
          className="order__controls__button"
        >
          Close
        </Button>
      </Box>
    </Box>
  );
};

export default OrderControls;
