import React from "react";
import Grid from "@material-ui/core/Grid";
import OrderControls from "./OrderControls";
import OrderForm from "./OrderForm";

const OrderSection = () => {
  return (
    <form type="post">
      <Grid container justify="space-between" alignItems="center" spacing={2}>
        <Grid item xs={4}>
          <OrderControls />
        </Grid>
        <Grid item xs={8}>
          <OrderForm />
        </Grid>
      </Grid>
    </form>
  );
};

export default OrderSection;
