import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const ContractorDisplay = (props) => {
  const { contractor = { name: "", company: "" } } = props;

  return (
    <Grid container justify="flex-start" alignItems="center">
      <Grid container item xs={12} spacing={1}>
        <Grid item xs={4}>
          <Typography variant="subtitle1">Name:</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="body1">{contractor.name}</Typography>
        </Grid>
      </Grid>
      <Grid container item xs={12}>
        <Grid item xs={4}>
          <Typography variant="subtitle1">Company:</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="body1">{contractor.company}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

ContractorDisplay.propTypes = {
  contract: PropTypes.shape({
    name: PropTypes.string,
    company: PropTypes.string,
  }),
};

export default ContractorDisplay;
