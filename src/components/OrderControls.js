import React from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useDisplayDispatch } from "../context/displayContext";
import {
  useContractor,
  useContractorDispatch,
} from "../context/contractorContext";
import { useInvoice, useInvoiceDispatch } from "../context/invoiceContext";
import { printInvoice, validate } from "../utils/orderUtils";
import InvoiceDisplay from "./InvoiceDisplay";
import OrderButton from "./OrderButton";
import Modal from "./Modal";

const OrderControls = () => {
  const [printing, setPrinting] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);
  const invoice = useInvoice();
  const { contractor } = useContractor();
  const { showTotal, hideTotal, showAlert, hideAlert } = useDisplayDispatch();
  const { closeContractor } = useContractorDispatch();
  const { closeInvoice } = useInvoiceDispatch();

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
    const isMobile = ua.indexOf("mobile") > -1;

    // TODO window.print() not functional on Android devices.
    if (isAndroid) {
      showAlert({
        open: true,
        severity: "warning",
        message: "Android not supported.",
      });
    } else if (validate(invoice, showAlert)) {
      setPrinting(true);

      // Mobile has security checks to prevent automated printing, so print now.
      if (isMobile) {
        setTimeout(() => {
          printInvoice();
        }, 50);
      }
    }
  };

  const handleClose = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleConfirm = () => {
    setModalOpen(false);
    hideTotal();
    closeContractor();
    closeInvoice();
  };

  React.useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    const isMobile = ua.indexOf("mobile") > -1;

    // Put printing in useEffect so the iframe is only rendered when desired.
    if (printing && !isMobile) {
      printInvoice();
      setPrinting(false);
    }
  }, [printing]);

  return (
    <>
      <Box display="flex" flexDirection="column" className="controls">
        <Box p={0.5}>
          <OrderButton onClick={handleSubmit}>Calculate</OrderButton>
        </Box>
        <Box p={0.5}>
          <OrderButton type="print" onClick={handlePrint}>
            Print
          </OrderButton>
        </Box>
        <Box flexGrow={1} />
        <Box p={0.5}>
          <OrderButton type="clear" color="secondary" onClick={handleClose}>
            Close
          </OrderButton>
        </Box>
      </Box>
      {printing && <InvoiceDisplay invoice={invoice} contractor={contractor} />}
      <Modal open={modalOpen} handleClose={handleModalClose}>
        <Grid
          container
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
              <OrderButton color="default" onClick={handleModalClose}>
                Cancel
              </OrderButton>
            </Grid>
            <Grid item xs={12} md={6}>
              <OrderButton onClick={handleConfirm}>Confirm</OrderButton>
            </Grid>
          </Grid>
        </Grid>
      </Modal>
    </>
  );
};

export default OrderControls;
