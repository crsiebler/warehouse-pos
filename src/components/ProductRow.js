import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { ccyFormat } from "../utils/orderUtils";
import ProductInput from "./ProductInput";
import QuantityInput from "./QuantityInput";

const ProductRow = (props) => {
  const { product, index } = props;
  return (
    <TableRow>
      <TableCell>
        <ProductInput rowIndex={index} />
      </TableCell>
      <TableCell>{product.name}</TableCell>
      <TableCell align="right">
        <QuantityInput rowIndex={index} />
      </TableCell>
      <TableCell align="right">{ccyFormat(product.price)}</TableCell>
      <TableCell align="right">
        {ccyFormat(product.quantity * product.price)}
      </TableCell>
    </TableRow>
  );
};

export default ProductRow;
