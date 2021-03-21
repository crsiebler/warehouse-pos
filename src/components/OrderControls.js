import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { useDisplayDispatch } from "../context/displayContext";
import { useContractor } from "../context/contractorContext";
import { useInvoice } from "../context/invoiceContext";
import InvoiceDisplay from "./InvoiceDisplay";

const OrderControls = () => {
  const { showTotal, hideTotal } = useDisplayDispatch();
  const { dispatch: dispatchContractor } = useContractor();
  const { dispatch: dispatchInvoice } = useInvoice();

  const handlePrint = () => {
    // const media = document.getElementById("invoiceContents").innerHTML;
    // const frame = document.getElementById("invoiceIframe").contentWindow;
    // console.log(media);
    // frame.document.open();
    // frame.document.write(media);
    // frame.document.close();
    // frame.focus();
    // frame.print();

    const frame = document.getElementById("invoiceIframe");
    const contentWindow = frame.contentWindow;
    const innerHTML = frame.innerHTML;
    console.log(innerHTML);
    contentWindow.document.open();
    contentWindow.document.write(innerHTML);
    contentWindow.document.close();
    contentWindow.focus();
    contentWindow.print();
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    showTotal();
  };

  const handleClose = (e) => {
    e.preventDefault();
    hideTotal();
    dispatchContractor({ type: "close" });
    dispatchInvoice({ type: "close" });
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
