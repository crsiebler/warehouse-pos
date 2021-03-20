import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { useDisplayDispatch } from "../context/displayContext";
import { useProduct } from "../context/productContext";
import { useInvoice } from "../context/invoiceContext";

const ProductInput = (props) => {
  const { rowIndex } = props;
  const { hideTotal } = useDisplayDispatch();
  const { state: products } = useProduct();
  const { dispatch: dispatchInvoice } = useInvoice();
  const [productIndex, setProductIndex] = React.useState(0);

  const handleChange = (e) => {
    const { value } = e.target;
    const data = { product: products[value], rowIndex };
    setProductIndex(value);
    hideTotal();
    dispatchInvoice({ type: "set_product", data });
    dispatchInvoice({ type: "reset_quantity", rowIndex });
  };

  console.log(`RENDERED: ProductInput (${rowIndex})`);

  return (
    <Select
      variant="outlined"
      inputProps={{ className: "order__form__table__product__select" }}
      value={productIndex}
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
