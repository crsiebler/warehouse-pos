import React from "react";
import Skeleton from "react-loading-skeleton";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const ContractorSkelton = () => (
  <Grid container justify="flex-start" alignItems="center">
    <Grid container item xs={12} spacing={1}>
      <Grid item xs={4}>
        <Typography variant="subtitle1">Name:</Typography>
      </Grid>
      <Grid item xs={8}>
        <Skeleton height={24} width={`100%`} />
      </Grid>
    </Grid>
    <Grid container item xs={12}>
      <Grid item xs={4}>
        <Typography variant="subtitle1">Company:</Typography>
      </Grid>
      <Grid item xs={8}>
        <Skeleton height={24} width={`100%`} />
      </Grid>
    </Grid>
  </Grid>
);

export default ContractorSkelton;
