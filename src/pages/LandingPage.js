import React from "react";
import Container from "@material-ui/core/Container";
import ContractorSection from "../components/ContractorSection";
import OrderSection from "../components/OrderSection";

const LandingPage = () => {
  return (
    <Container maxWidth={false} className="landing">
      <ContractorSection />
      <OrderSection />
    </Container>
  );
};

export default LandingPage;
