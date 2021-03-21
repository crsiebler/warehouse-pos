import React from "react";
import Container from "@material-ui/core/Container";
import { ContractorProvider } from "../context/contractorContext";
import ContractorSection from "../components/ContractorSection";
import OrderForm from "../components/OrderForm";
import SnackbarContainer from "../components/SnackbarContainer";

const LandingPage = () => (
  <Container maxWidth={false} className="landing">
    <ContractorProvider>
      <ContractorSection />
      <OrderForm />
    </ContractorProvider>
    <SnackbarContainer />
  </Container>
);

export default LandingPage;
