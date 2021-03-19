import React from "react";
import PropTypes from "prop-types";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { calculateInvoice, formatTotals } from "../utils/orderUtils";

const OrderTotals = (props) => {
  const { invoice, discountRate } = props;

  const {
    subtotalFormatted,
    discountFormatted,
    taxesFormatted,
    totalFormatted,
    taxPercentage,
    discountPercentage,
  } = React.useMemo(
    () => formatTotals(calculateInvoice(invoice, discountRate)),
    [invoice, discountRate]
  );

  return (
    <>
      <TableRow>
        <TableCell rowSpan={4} colSpan={2} />
        <TableCell colSpan={2}>Subtotal</TableCell>
        <TableCell align="right">{subtotalFormatted}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Discount</TableCell>
        <TableCell align="right">{discountPercentage}</TableCell>
        <TableCell align="right">{discountFormatted}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Tax</TableCell>
        <TableCell align="right">{taxPercentage}</TableCell>
        <TableCell align="right">{taxesFormatted}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={2}>Total</TableCell>
        <TableCell align="right">{totalFormatted}</TableCell>
      </TableRow>
    </>
  );
};

OrderTotals.propTypes = {
  invoice: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      quantity: PropTypes.number,
      sku: PropTypes.string,
    })
  ).isRequired,
  discountRate: PropTypes.number.isRequired,
};

export default React.memo(OrderTotals);
