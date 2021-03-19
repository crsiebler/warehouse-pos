import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { useDisplay } from "../context/displayContext";
import { useContractor } from "../context/contractorContext";
import { useInvoice } from "../context/invoiceContext";

const OrderControls = () => {
  const { dispatch: dispatchDisplay } = useDisplay();
  const { dispatch: dispatchContractor } = useContractor();
  const { dispatch: dispatchInvoice } = useInvoice();

  const handleCalculate = (e) => {
    e.preventDefault();
    dispatchDisplay({ type: "show_total" });
  };

  const handleClose = (e) => {
    e.preventDefault();
    dispatchDisplay({ type: "hide_total" });
    dispatchContractor({ type: "close" });
    dispatchInvoice({ type: "close" });
  };

  return (
    <Box display="flex" flexDirection="column" className="order__controls">
      <Box p={0.5}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="order__controls__button"
          onClick={handleCalculate}
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
          onClick={handleClose}
        >
          Close
        </Button>
      </Box>
    </Box>
  );
};

export default OrderControls;
