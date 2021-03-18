import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { useProduct } from "../context/productContext";
import { useInvoice } from "../context/invoiceContext";

const ProductInput = (props) => {
  const { rowIndex } = props;
  const { state: products } = useProduct();
  const { dispatch } = useInvoice();

  const handleChange = (e) => {
    const { value } = e.target;
    const data = { product: products[value], rowIndex };
    dispatch({ type: "set_product", data });
  };

  return (
    <Select
      variant="outlined"
      inputProps={{ className: "order__form__table__product__select" }}
      onChange={handleChange}
    >
      {products.map((product, index) => (
        <MenuItem key={index} value={index}>
          {product.sku}
        </MenuItem>
      ))}
    </Select>
  );
};

export default ProductInput;
