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
import Button from "./Button";
import ConfirmModal from "./ConfirmModal";

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
    } else if (isMobile) {
      showAlert({
        open: true,
        severity: "warning",
        message: "Mobile not supported.",
      });
    } else if (validate(invoice, showAlert)) {
      setPrinting(true);
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
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          className="controls__button"
        >
          Calculate
        </Button>
        <Button
          type="print"
          color="primary"
          onClick={handlePrint}
          className="controls__button"
        >
          Print
        </Button>
        <Box flexGrow={1} />
        <Button
          type="reset"
          color="secondary"
          onClick={handleClose}
          className="controls__button"
        >
          Close
        </Button>
      </Box>
      {printing && <InvoiceDisplay invoice={invoice} contractor={contractor} />}
      <ConfirmModal
        open={modalOpen}
        onClose={handleModalClose}
        onConfirm={handleConfirm}
      />
    </>
  );
};

export default OrderControls;
