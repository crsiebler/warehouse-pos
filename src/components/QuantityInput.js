import React from "react";
import TextField from "@material-ui/core/TextField";
import { useInvoice } from "../context/invoiceContext";

const QuantityInput = (props) => {
  const { rowIndex } = props;
  const { state: invoice, dispatch } = useInvoice();

  const handleChange = (e) => {
    const { value } = e.target;
    const data = { rowIndex, value };
    if (value < 1) {
      dispatch({ type: "remove_product", rowIndex });
    } else {
      dispatch({ type: "set_quantity", data });
    }
  };

  return (
    <TextField
      type="number"
      min={0}
      onChange={handleChange}
      value={invoice.products[rowIndex].quantity}
    />
  );
};

export default QuantityInput;
