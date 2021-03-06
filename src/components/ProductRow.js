import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { ccyFormat } from "../utils/orderUtils";
import ProductSelect from "./ProductSelect";
import ProductQuantityInput from "./ProductQuantityInput";

const ProductRow = ({ product, index }) => (
  <TableRow>
    <TableCell>
      <ProductSelect rowIndex={index} />
    </TableCell>
    <TableCell>{product.name}</TableCell>
    <TableCell align="right">
      <ProductQuantityInput
        rowIndex={index}
        inventory={product.inventory}
        quantity={product.quantity}
      />
    </TableCell>
    <TableCell align="right">{ccyFormat(product.price)}</TableCell>
    <TableCell align="right">
      {ccyFormat(product.quantity * product.price)}
    </TableCell>
  </TableRow>
);

export default React.memo(ProductRow);
