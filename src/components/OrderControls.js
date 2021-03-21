import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { useDisplayDispatch } from "../context/displayContext";
import { useContractor } from "../context/contractorContext";
import { useInvoiceDispatch } from "../context/invoiceContext";
import InvoiceDisplay from "./InvoiceDisplay";

const OrderControls = () => {
  const { showTotal, hideTotal, showAlert } = useDisplayDispatch();
  const { dispatch: dispatchContractor } = useContractor();
  const { closeInvoice } = useInvoiceDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    showTotal();
  };

  const handlePrint = (e) => {
    e.preventDefault();
    const ua = navigator.userAgent.toLowerCase();
    const isAndroid = ua.indexOf("android") > -1;

    // TODO window.print() not functional on Android devices.
    if (isAndroid) {
      showAlert({
        open: true,
        severity: "warning",
        message: "Android not supported.",
      });
    } else {
      // Print the iframe containing the invoice
      const frame = document.getElementById("invoiceIframe");
      const contentWindow = frame.contentWindow;
      const innerHTML = frame.innerHTML;
      contentWindow.document.open();
      contentWindow.document.write(innerHTML);
      contentWindow.document.close();
      contentWindow.focus();
      contentWindow.print();
    }
  };

  const handleClose = (e) => {
    e.preventDefault();
    hideTotal();
    dispatchContractor({ type: "close" });
    closeInvoice();
  };

  return (
    <>
      <InvoiceDisplay />
      <Box display="flex" flexDirection="column" className="order__controls">
        <Box p={0.5}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="order__controls__button"
            onClick={handleSubmit}
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
            onClick={handlePrint}
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
    </>
  );
};

export default OrderControls;
