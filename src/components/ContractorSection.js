import React from "react";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { useContractor } from "../context/contractorContext";
import { useDisplayDispatch } from "../context/displayContext";
import { getContractor } from "../api/contractorApi";
import ContractorInput from "./ContactorInput";
import ContractorDisplay from "./ContractorDisplay";

const ContractorSection = () => {
  const { state: contractor, dispatch: dispatchContractor } = useContractor();
  const { showAlert, hideTotal } = useDisplayDispatch();

  const handleChange = (e) => {
    const { id, value } = e.target;
    const data = { ...contractor, [id]: value };
    dispatchContractor({ type: "set_contractor", data });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getContractor(contractor)
      .then(({ data }) => {
        showAlert({
          open: true,
          severity: "success",
          message: "Contractor Retrieved",
        });
        hideTotal();
        dispatchContractor({ type: "set_contractor", data });
      })
      .catch((error) => {
        showAlert({
          open: true,
          severity: "error",
          message: "Fail to retrieve Contractor",
        });
        console.log(`Error: ${JSON.stringify(error)}`);
      });
  };

  return (
    <Paper elevation={3} className="contractor">
      <Container maxWidth="sm" className="contractor__container">
        <ContractorInput
          onSubmit={handleSubmit}
          onChange={handleChange}
          value={contractor.id}
        />
        <ContractorDisplay contractor={contractor} />
      </Container>
    </Paper>
  );
};

export default ContractorSection;
