import React from "react";
import clsx from "clsx";
import Container from "@material-ui/core/Container";
import CircularProgress from "@material-ui/core/CircularProgress";
import { ContractorProvider } from "../context/contractorContext";
import { useDisplay, useDisplayDispatch } from "../context/displayContext";
import { useProductDispatch } from "../context/productContext";
import { getProducts } from "../api/productApi";
import ContractorSection from "../components/ContractorSection";
import OrderForm from "../components/OrderForm";
import Snackbar from "../components/Snackbar";

const LandingPage = () => {
  const { alert, loading } = useDisplay();
  const {
    hideAlert,
    showAlert,
    showLoading,
    hideLoading,
    hideTotal,
  } = useDisplayDispatch();
  const { setProducts } = useProductDispatch();

  const handleClose = () => {
    hideAlert();
  };

  React.useEffect(() => {
    showLoading();
    getProducts()
      .then(({ data }) => {
        if (data.length > 0) {
          data.sort((a, b) => {
            return a.sku.localeCompare(b.sku);
          });
          hideTotal();
          setProducts(data);
        } else {
          showAlert({
            open: true,
            severity: "warning",
            message: "No products in system",
          });
        }
      })
      .catch((error) => {
        showAlert({
          open: true,
          severity: "error",
          message: "Fail to retrieve Products",
        });
        console.log(`Error: ${JSON.stringify(error)}`);
      })
      .finally(() => {
        hideLoading();
      });
  }, [hideLoading, hideTotal, setProducts, showAlert, showLoading]);

  return (
    <Container
      maxWidth={false}
      className={clsx("landing", loading && "landing--loading")}
    >
      <ContractorProvider>
        <ContractorSection />
        <OrderForm />
      </ContractorProvider>
      <Snackbar alert={alert} onClose={handleClose} />
      {loading && <CircularProgress className="progress__spinner" />}
    </Container>
  );
};

export default LandingPage;
