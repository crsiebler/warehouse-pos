import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const ContractorInput = (props) => {
  const { payload = { id: "" }, onChange, onSubmit } = props;

  return (
    <form method="get" onSubmit={onSubmit} className="contractor__form">
      <Grid container justify="flex-start" alignItems="center">
        <Grid item xs={4}>
          <Typography variant="subtitle1">Contactor ID:</Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField
            id="id"
            variant="outlined"
            inputProps={{ className: "contractor__form__input" }}
            value={payload.id}
            onChange={onChange}
            required
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default ContractorInput;
