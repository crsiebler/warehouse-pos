import "./styles/main.scss";
import { StylesProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { SkeletonTheme } from "react-loading-skeleton";
import { DisplayProvider } from "./context/displayContext";
import { ProductProvider } from "./context/productContext";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <StylesProvider injectFirst>
      <SkeletonTheme color="#dcdcf5" highlightColor="#c6c6dc">
        <CssBaseline />
        <DisplayProvider>
          <ProductProvider>
            <LandingPage />
          </ProductProvider>
        </DisplayProvider>
      </SkeletonTheme>
    </StylesProvider>
  );
}

export default App;
