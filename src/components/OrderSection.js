import React from "react";
import Grid from "@material-ui/core/Grid";
import { getProducts } from "../api/productApi";
import { InvoiceProvider } from "../context/invoiceContext";
import { useProduct } from "../context/productContext";
import { useDisplay } from "../context/displayContext";
import OrderControls from "./OrderControls";
import OrderForm from "./OrderForm";

const OrderSection = () => {
  const { dispatch: dispatchProduct } = useProduct();
  const { dispatch: dispatchDisplay } = useDisplay();

  React.useEffect(() => {
    getProducts()
      .then(({ data }) => {
        dispatchProduct({ type: "set_products", data });
        dispatchProduct({ type: "sort_products", data });
      })
      .catch((error) => {
        const alert = {
          open: true,
          severity: "error",
          message: "Fail to retrieve Products",
        };
        dispatchDisplay({ type: "show_alert", alert });
        console.log(`Error: ${JSON.stringify(error)}`);
      });
  }, [dispatchProduct, dispatchDisplay]);

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
