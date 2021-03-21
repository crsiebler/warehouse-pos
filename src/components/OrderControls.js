import React from "react";
import Box from "@material-ui/core/Box";
import { useDisplayDispatch } from "../context/displayContext";
import {
  useContractor,
  useContractorDispatch,
} from "../context/contractorContext";
import { useInvoice, useInvoiceDispatch } from "../context/invoiceContext";
import { printInvoice, validate } from "../utils/orderUtils";
import InvoiceDisplay from "./InvoiceDisplay";
import OrderButton from "./OrderButton";

const OrderControls = () => {
  const invoice = useInvoice();
  const { contractor } = useContractor();
  const { showTotal, hideTotal, showAlert, hideAlert } = useDisplayDispatch();
  const { closeContractor } = useContractorDispatch();
  const { closeInvoice } = useInvoiceDispatch();
  const [printing, setPrinting] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ensure the Invoice is valid, display alert if not
    if (validate(invoice, showAlert)) {
      hideAlert();
      showTotal();
    }
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
    } else if (validate(invoice, showAlert)) {
      setPrinting(true);
    }
  };

  const handleClose = (e) => {
    e.preventDefault();
    hideTotal();
    closeContractor();
    closeInvoice();
  };

  React.useEffect(() => {
    // Put printing in useEffect so the iframe is only rendered when desired.
    if (printing) {
      printInvoice();
      setPrinting(false);
    }
  }, [printing]);

  return (
    <>
      {printing && <InvoiceDisplay invoice={invoice} contractor={contractor} />}
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
