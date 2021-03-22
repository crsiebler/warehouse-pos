import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { useDisplayDispatch } from "../context/displayContext";
import { useProduct } from "../context/productContext";
import { useInvoiceDispatch } from "../context/invoiceContext";
import { NONE_SKU } from "../utils/orderUtils";

const MenuItemMemo = React.memo(MenuItem);

const ProductSelect = ({ rowIndex }) => {
  const [productIndex, setProductIndex] = React.useState(0);
  const products = useProduct();
  const { hideTotal } = useDisplayDispatch();
  const { removeProduct, setProduct, resetQuantity } = useInvoiceDispatch();

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

  return (
    <Select
      variant="outlined"
      inputProps={{ className: "order__form__table__product__select" }}
      value={productIndex}
      onChange={handleChange}
    >
      {products.map((product, index) => (
        <MenuItemMemo key={index} value={index}>
          {product.sku}
        </MenuItemMemo>
      ))}
    </Select>
  );
};

export default ProductSelect;
