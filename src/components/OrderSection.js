import React from "react";
import Grid from "@material-ui/core/Grid";
import { getProducts } from "../api/productApi";
import { InvoiceProvider } from "../context/invoiceContext";
import { useProduct } from "../context/productContext";
import OrderControls from "./OrderControls";
import OrderForm from "./OrderForm";

const OrderSection = () => {
  const { dispatch } = useProduct();

  React.useEffect(() => {
    getProducts()
      .then(({ data }) => {
        dispatch({ type: "set_products", data });
        dispatch({ type: "sort_products", data });
      })
      .catch((error) => {
        // TODO error handling on getting products
        console.log(`Error: ${JSON.stringify(error)}`);
      });
  }, [dispatch]);

  return (
    <InvoiceProvider>
      <form>
        <Grid container justify="space-between" alignItems="center" spacing={2}>
          <Grid item md={4} xs={12}>
            <OrderControls />
          </Grid>
          <Grid item md={8} xs={12}>
            <OrderForm />
          </Grid>
        </Grid>
      </form>
    </InvoiceProvider>
  );
};

export default OrderSection;
