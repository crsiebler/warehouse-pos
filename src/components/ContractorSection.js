import React from "react";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import {
  useContractor,
  useContractorDispatch,
} from "../context/contractorContext";
import { useDisplayDispatch } from "../context/displayContext";
import { getContractor } from "../api/contractorApi";
import ContractorInput from "./ContactorInput";
import ContractorDisplay from "./ContractorDisplay";

const ContractorSection = () => {
  const contractor = useContractor();
  const { setContractor } = useContractorDispatch();
  const {
    showAlert,
    hideTotal,
    showLoading,
    hideLoading,
  } = useDisplayDispatch();

  const handleChange = (e) => {
    const { id, value } = e.target;
    const data = { ...contractor, [id]: value };
    setContractor(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    showLoading();
    getContractor(contractor)
      .then(({ data }) => {
        showAlert({
          open: true,
          severity: "success",
          message: "Contractor Retrieved",
        });
        hideTotal();
        setContractor(data);
      })
      .catch((error) => {
        showAlert({
          open: true,
          severity: "error",
          message: "Fail to retrieve Contractor",
        });
        console.log(`Error: ${JSON.stringify(error)}`);
      })
      .finally(() => {
        hideLoading();
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
