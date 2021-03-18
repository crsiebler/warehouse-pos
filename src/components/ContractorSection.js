import React from "react";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { useContractor } from "../context/contractorContext";
import { getContractor } from "../api/contractorApi";
import ContractorInput from "./ContactorInput";
import ContractorDisplay from "./ContractorDisplay";

const ContractorSection = () => {
  const [payload, setPayload] = React.useState({ id: "" });
  const { state: contractor, dispatch } = useContractor();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setPayload({ ...payload, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getContractor(payload)
      .then(({ data }) => {
        dispatch({ type: "set_contractor", data });
      })
      .catch((error) => {
        console.log(`Error: ${JSON.stringify(error)}`);
      });
  };

  return (
    <Paper elevation={3} className="contractor">
      <Container maxWidth="sm" className="contractor__container">
        <ContractorInput
          onSubmit={handleSubmit}
          onChange={handleChange}
          payload={payload}
        />
        <ContractorDisplay contractor={contractor} />
      </Container>
    </Paper>
  );
};

export default ContractorSection;
