import React from "react";
import TextField from "@material-ui/core/TextField";
import { useDisplay } from "../context/displayContext";
import { useInvoice } from "../context/invoiceContext";

const QuantityInput = (props) => {
  const { rowIndex } = props;
  const { dispatch: dispatchDisplay } = useDisplay();
  const { state: invoice, dispatch: dispatchInvoice } = useInvoice();

  const handleChange = (e) => {
    const { value } = e.target;
    const data = { rowIndex, quantity: parseInt(value) };
    if (value < 1) {
      dispatchDisplay({ type: "hide_total" });
      dispatchInvoice({ type: "remove_product", rowIndex });
    } else if (value > 10) {
      // TODO error handling on max inventory reached
      console.log("Not enough in inventory");
    } else {
      dispatchDisplay({ type: "hide_total" });
      dispatchInvoice({ type: "set_quantity", data });
    }
  };

  return (
    <TextField
      type="number"
      className="order__form__table__product__input"
      inputProps={{
        min: 0,
        max: 9999,
      }}
      onChange={handleChange}
      value={invoice[rowIndex].quantity}
    />
  );
};

export default QuantityInput;
