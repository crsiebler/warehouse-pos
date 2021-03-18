import "./App.css";
import { StylesProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ContractorProvider } from "./context/contractorContext";
import { ProductProvider } from "./context/productContext";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <StylesProvider injectFirst>
      <ContractorProvider>
        <ProductProvider>
          <CssBaseline />
          <LandingPage />
        </ProductProvider>
      </ContractorProvider>
    </StylesProvider>
  );
}

export default App;
