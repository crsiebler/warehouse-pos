import React from "react";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import { useDisplay, useDisplayDispatch } from "../context/displayContext";
import { useContractor } from "../context/contractorContext";
import { useInvoice, useInvoiceDispatch } from "../context/invoiceContext";
import { useProduct } from "../context/productContext";
import { hasDuplicates } from "../utils/orderUtils";
import OrderTableHeader from "./OrderTableHeader";
import ProductRow from "./ProductRow";
import OrderTotals from "./OrderTotals";

const OrderForm = () => {
  const { calculate } = useDisplay();
  const contractor = useContractor();
  const invoice = useInvoice();
  const products = useProduct();
  const { hideTotal, showAlert, hideAlert } = useDisplayDispatch();
  const { addProduct } = useInvoiceDispatch();

  const handleAddButton = (e) => {
    if (products.length > 1) {
      hideTotal();
      addProduct();
    } else {
      showAlert({
        open: true,
        severity: "warning",
        message: "No products in system",
      });
    }
  };

  React.useEffect(() => {
    // Ensure the Invoice is valid, display alert if not
    if (hasDuplicates(invoice)) {
      showAlert({
        open: true,
        severity: "warning",
        message: "Duplicate product in cart",
      });
    } else {
      hideAlert();
    }
  }, [showAlert, hideAlert, invoice]);

  const handleChange = (e, index) => {};

  console.log("RENDERED: OrderForm");

  return (
    <TableContainer component={Paper} elevation={3} className="order__form">
      <Table aria-label="order product">
        <OrderTableHeader onClick={handleAddButton} />
        {invoice.length > 0 && (
          <TableBody>
            {invoice.map((product, index) => {
              const handleRowChange = (e) => {
                handleChange(e, index);
              };

              return (
                <ProductRow
                  key={index}
                  index={index}
                  product={product}
                  onChange={handleRowChange}
                />
              );
            })}
            {calculate && (
              <OrderTotals
                invoice={invoice}
                discountRate={contractor.discount}
              />
            )}
          </TableBody>
        )}
      </Table>
    </TableContainer>
  );
};

export default OrderForm;
