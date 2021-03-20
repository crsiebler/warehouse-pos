import React from "react";
import PropTypes from "prop-types";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import Fab from "@material-ui/core/Fab";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const OrderTableHeader = ({ onClick }) => {
  console.log("RENDERED: OrderTableHeader");

  return (
    <TableHead>
      <TableRow>
        <TableCell align="center">
          <Fab
            size="small"
            color="primary"
            aria-label="add to invoice"
            onClick={onClick}
          >
            <AddShoppingCartIcon />
          </Fab>
        </TableCell>
        <TableCell align="center" colSpan={3}>
          Order Form
        </TableCell>
        <TableCell align="right">Price</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Part No.</TableCell>
        <TableCell>Desc</TableCell>
        <TableCell align="right">Qty.</TableCell>
        <TableCell align="right">Unit</TableCell>
        <TableCell align="right">Sum</TableCell>
      </TableRow>
    </TableHead>
  );
};

OrderTableHeader.propTypes = {
  onClick: PropTypes.func.isRequired,
};

OrderTableHeader.defaultProps = {
  onClick: () => {},
};

export default OrderTableHeader;
