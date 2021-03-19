import React from "react";
import Container from "@material-ui/core/Container";
import { ContractorProvider } from "../context/contractorContext";
import { ProductProvider } from "../context/productContext";
import ContractorSection from "../components/ContractorSection";
import OrderSection from "../components/OrderSection";

const LandingPage = () => {
  return (
    <Container maxWidth={false} className="landing">
      <ContractorProvider>
        <ContractorSection />
        <ProductProvider>
          <OrderSection />
        </ProductProvider>
      </ContractorProvider>
    </Container>
  );
};

export default LandingPage;
