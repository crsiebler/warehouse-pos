import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { TAX_RATE, subtotal, ccyFormat } from "../utils/orderUtils";

const OrderTotals = (props) => {
  const { products, discountRate } = props;
  const invoiceSubtotal = subtotal(products);
  const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  const invoiceDiscount = discountRate * invoiceSubtotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal - invoiceDiscount;

  return (
    <>
      <TableRow>
        <TableCell rowSpan={4} colSpan={2} />
        <TableCell colSpan={2}>Subtotal</TableCell>
        <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Discount</TableCell>
        <TableCell align="right">{`${(discountRate * 100).toFixed(
          1
        )} %`}</TableCell>
        <TableCell align="right">{ccyFormat(invoiceDiscount)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Tax</TableCell>
        <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
          1
        )} %`}</TableCell>
        <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={2}>Total</TableCell>
        <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
      </TableRow>
    </>
  );
};

export default OrderTotals;
