import React from "react";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import { useDisplay } from "../context/displayContext";
import { useInvoice } from "../context/invoiceContext";
import OrderTableHeader from "./OrderTableHeader";
import ProductRow from "./ProductRow";
import OrderTotals from "./OrderTotals";

const OrderTable = () => {
  console.log("RENDERED: OrderTable");
  const { calculate } = useDisplay();
  const invoice = useInvoice();

  return (
    <TableContainer component={Paper} elevation={3} className="order__form">
      <Table aria-label="order product">
        <OrderTableHeader />
        {invoice.length > 0 && (
          <TableBody>
            {invoice.map((product, index) => (
              <ProductRow key={index} index={index} product={product} />
            ))}
            {calculate && <OrderTotals invoice={invoice} />}
          </TableBody>
        )}
      </Table>
    </TableContainer>
  );
};

export default OrderTable;
