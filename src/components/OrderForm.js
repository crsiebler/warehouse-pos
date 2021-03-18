import React from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import { useContractor } from "../context/contractorContext";
import { useInvoice } from "../context/invoiceContext";
import { useProduct } from "../context/productContext";
import OrderTableHeader from "./OrderTableHeader";
import ProductRow from "./ProductRow";
import OrderTotals from "./OrderTotals";

const OrderForm = () => {
  const { state: contractor } = useContractor();
  const { state: invoice, dispatch } = useInvoice();
  const { state: products } = useProduct();

  const handleAddButton = (e) => {
    e.preventDefault();
    dispatch({ type: "add_product", products });
  };

  return (
    <Paper elevation={3} className="order__form">
      <Table aria-label="order product">
        <OrderTableHeader onClick={handleAddButton} />
        <TableBody>
          {invoice.products.map((product, index) => (
            <ProductRow key={index} product={product} index={index} />
          ))}
          {invoice.calculate && (
            <OrderTotals
              invoice={invoice.products}
              discountRate={contractor.discount}
            />
          )}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default OrderForm;
