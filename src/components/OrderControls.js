import React from "react";
import Box from "@material-ui/core/Box";
import { useDisplayDispatch } from "../context/displayContext";
import { useContractorDispatch } from "../context/contractorContext";
import { useInvoiceDispatch } from "../context/invoiceContext";
import InvoiceDisplay from "./InvoiceDisplay";
import OrderButton from "./OrderButton";

const OrderControls = () => {
  const { showTotal, hideTotal, showAlert } = useDisplayDispatch();
  const { closeContractor } = useContractorDispatch();
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
    closeContractor();
    closeInvoice();
  };

  return (
    <>
      <InvoiceDisplay />
      <Box display="flex" flexDirection="column" className="order__controls">
        <Box p={0.5}>
          <OrderButton onClick={handleSubmit}>Calculate</OrderButton>
        </Box>
        <Box p={0.5} flexGrow={1}>
          <OrderButton type="print" onClick={handlePrint}>
            Print
          </OrderButton>
        </Box>
        <Box p={0.5}>
          <OrderButton type="clear" color="secondary" onClick={handleClose}>
            Close
          </OrderButton>
        </Box>
      </Box>
    </>
  );
};

export default OrderControls;
