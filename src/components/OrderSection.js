import React from "react";
import Grid from "@material-ui/core/Grid";
import { InvoiceProvider } from "../context/invoiceContext";
import OrderControls from "./OrderControls";
import OrderForm from "./OrderForm";

const OrderSection = () => {
  console.log("RENDERED: OrderSection");

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
