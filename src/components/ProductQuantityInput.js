import React from "react";
import TextField from "@material-ui/core/TextField";
import { useDisplayDispatch } from "../context/displayContext";
import { useInvoiceDispatch } from "../context/invoiceContext";

const ProductQuantityInput = ({ rowIndex, inventory, quantity }) => {
  const { hideTotal, showAlert } = useDisplayDispatch();
  const { removeProduct, setQuantity } = useInvoiceDispatch();

  const handleChange = (e) => {
    const { value } = e.target;
    const data = { rowIndex, quantity: parseInt(value) };
    if (value < 1) {
      // Less than
      hideTotal();
      removeProduct(rowIndex);
    } else if (value > inventory) {
      showAlert({
        open: true,
        severity: "warning",
        message: "Not enough in inventory.",
      });
    } else {
      hideTotal();
      setQuantity(data);
    }
  };

  return (
    <TextField
      type="number"
      variant="outlined"
      label={`Avail: ${inventory}`}
      inputProps={{
        min: 0,
        max: inventory + 1, // Add 1 so the onChange handler is triggered
        className: "table__input",
      }}
      onChange={handleChange}
      value={quantity}
    />
  );
};

export default ProductQuantityInput;
