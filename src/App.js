import "./styles/main.scss";
import { StylesProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { DisplayProvider } from "./context/displayContext";
import { ProductProvider } from "./context/productContext";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <DisplayProvider>
        <ProductProvider>
          <LandingPage />
        </ProductProvider>
      </DisplayProvider>
    </StylesProvider>
  );
}

export default App;
