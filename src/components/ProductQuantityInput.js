import React from "react";
import TextField from "@material-ui/core/TextField";
import { useDisplayDispatch } from "../context/displayContext";
import { useInvoice } from "../context/invoiceContext";

const ProductQuantityInput = (props) => {
  const { rowIndex, inventory, quantity } = props;
  const { hideTotal, showAlert } = useDisplayDispatch();
  const { dispatch: dispatchInvoice } = useInvoice();

  const handleChange = (e) => {
    const { value } = e.target;
    const data = { rowIndex, quantity: value };
    if (value < 1) {
      hideTotal();
      dispatchInvoice({ type: "remove_product", rowIndex });
    } else if (value > inventory) {
      showAlert({
        open: true,
        severity: "warning",
        message: "Not enough in inventory.",
      });
    } else {
      console.log(data);
      hideTotal();
      dispatchInvoice({ type: "set_quantity", data });
    }
  };

  console.log(`RENDERED: ProductQuantityInput (${rowIndex})`);

  return (
    <TextField
      type="number"
      variant="outlined"
      label={`Avail: ${inventory}`}
      inputProps={{
        min: 0,
        max: inventory + 1,
        className: "order__form__table__product__input",
      }}
      onChange={handleChange}
      value={quantity}
    />
  );
};

export default ProductQuantityInput;
