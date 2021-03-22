import React from "react";
import Grid from "@material-ui/core/Grid";
import { InvoiceProvider } from "../context/invoiceContext";
import OrderControls from "./OrderControls";
import OrderTable from "./OrderTable";

const OrderForm = () => (
  <InvoiceProvider>
    <Grid
      container
      component="form"
      justify="center"
      alignItems="stretch"
      spacing={2}
    >
      <Grid item md={4} xs={12}>
        <OrderControls />
      </Grid>
      <Grid item md={8} xs={12}>
        <OrderTable />
      </Grid>
    </Grid>
  </InvoiceProvider>
);

export default OrderForm;
