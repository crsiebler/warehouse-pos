import React from "react";
import TextField from "@material-ui/core/TextField";
import { useDisplay } from "../context/displayContext";
import { useInvoice } from "../context/invoiceContext";

const ProductQuantityInput = (props) => {
  const { rowIndex, inventory } = props;
  const { dispatch: dispatchDisplay } = useDisplay();
  const { state: invoice, dispatch: dispatchInvoice } = useInvoice();

  const handleChange = (e) => {
    const { value } = e.target;
    const data = { rowIndex, quantity: parseInt(value) };
    if (value < 1) {
      dispatchDisplay({ type: "hide_total" });
      dispatchInvoice({ type: "remove_product", rowIndex });
    } else if (value > inventory) {
      const alert = {
        open: true,
        severity: "warning",
        message: "Not enough in inventory.",
      };
      dispatchDisplay({ type: "show_alert", alert });
    } else {
      dispatchDisplay({ type: "hide_total" });
      dispatchInvoice({ type: "set_quantity", data });
    }
  };

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
      value={invoice[rowIndex].quantity}
    />
  );
};

export default ProductQuantityInput;
