import React from "react";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import { useDisplay } from "../context/displayContext";
import { useContractor } from "../context/contractorContext";
import { useInvoice } from "../context/invoiceContext";
import { useProduct } from "../context/productContext";
import OrderTableHeader from "./OrderTableHeader";
import ProductRow from "./ProductRow";
import OrderTotals from "./OrderTotals";
import Snackbar from "./Snackbar";
import { validateInvoice } from "../utils/orderUtils";

const OrderForm = () => {
  const { state: display, dispatch: dispatchDisplay } = useDisplay();
  const { state: contractor } = useContractor();
  const { state: invoice, dispatch: dispatchInvoice } = useInvoice();
  const { state: products } = useProduct();

  const handleAddButton = (e) => {
    e.preventDefault();
    dispatchDisplay({ type: "hide_total" });
    dispatchInvoice({ type: "add_product", products });
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    dispatchDisplay({ type: "hide_alert" });
  };

  React.useEffect(() => {
    // Ensure the Invoice is valid, display alert if not
    const { valid, message } = validateInvoice(invoice);
    if (!valid) {
      const alert = { open: true, severity: "error", message };
      dispatchDisplay({ type: "show_alert", alert });
    } else {
      dispatchDisplay({ type: "hide_alert" });
    }
  }, [dispatchDisplay, invoice]);

  return (
    <TableContainer component={Paper} elevation={3} className="order__form">
      <Table aria-label="order product">
        <OrderTableHeader onClick={handleAddButton} />
        {invoice.length > 0 && (
          <TableBody>
            {invoice.map((product, index) => (
              <ProductRow key={index} product={product} index={index} />
            ))}
            {display.calculate && (
              <OrderTotals
                invoice={invoice}
                discountRate={contractor.discount}
              />
            )}
          </TableBody>
        )}
      </Table>
      <Snackbar alert={display.alert} onClose={handleClose} />
    </TableContainer>
  );
};

export default OrderForm;
