import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const ContractorInput = ({ value, onChange, onSubmit }) => (
  <form onSubmit={onSubmit} className="contractor__form">
    <Grid container justify="flex-start" alignItems="center">
      <Grid item xs={4}>
        <Typography variant="subtitle1">Contactor ID:</Typography>
      </Grid>
      <Grid item xs={8}>
        <TextField
          id="id"
          variant="outlined"
          autoComplete="off"
          inputProps={{ className: "contractor__form__input" }}
          value={value}
          onChange={onChange}
          required
        />
      </Grid>
    </Grid>
  </form>
);

ContractorInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

ContractorInput.defaultProps = {
  value: "",
  onChange: () => {},
  onSubmit: () => {},
};

export default ContractorInput;
