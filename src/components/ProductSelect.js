import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { useDisplayDispatch } from "../context/displayContext";
import { useProduct } from "../context/productContext";
import { useInvoiceDispatch } from "../context/invoiceContext";
import { NONE_SKU } from "../utils/orderUtils";

const ProductSelect = (props) => {
  const { rowIndex } = props;
  const products = useProduct();
  const { hideTotal } = useDisplayDispatch();
  const { removeProduct, setProduct, resetQuantity } = useInvoiceDispatch();
  const [productIndex, setProductIndex] = React.useState(0);

  const handleChange = (e) => {
    const { value } = e.target;
    const product = products[value];
    const data = { product, rowIndex };
    if (product.sku === NONE_SKU) {
      removeProduct(rowIndex);
    } else {
      setProductIndex(value);
      hideTotal();
      setProduct(data);
      resetQuantity(rowIndex);
    }
  };

  console.log(`RENDERED: ProductSelect (${rowIndex})`);

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

export default ProductSelect;
